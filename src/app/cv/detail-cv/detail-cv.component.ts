import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../model/cv';
import { APP_ROUTES } from '../../config/routes.config';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth/auth.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  cv: Cv | null = null;
  constructor(
    private CvService: CvService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService,
    public authService: AuthService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.CvService.getCvById(params['id']).subscribe({
        next: (cv) => {
          this.cv = cv;
        },
        error: () => {
          this.router.navigate([APP_ROUTES.cv]);
        },
      });
    });
  }
  delete() {
    if (this.cv) {
      this.CvService.deleteCv(this.cv.id).subscribe({
        next: () => {
          this.toaster.success(`${this.cv?.name} a été supprimé avec succès`);
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (e) => {
          console.log('delete error', e);
        },
      });
    }
  }
}

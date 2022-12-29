import { Component } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../model/cv';
import { APP_ROUTES } from '../../config/routes.config';

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
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.cv = this.CvService.getCvById(params['id']);
      if (!this.cv) {
        this.router.navigate([APP_ROUTES.cv]);
      }
    });
  }
  delete() {
    if (this.cv) {
      this.CvService.deleteCv(this.cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}

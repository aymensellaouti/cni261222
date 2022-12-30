import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    console.log('on constructor', this.cv);
  }
  ngOnInit() {
    console.log('on ngOnInit', this.cv);
    this.cvService.selectItem$.subscribe((cv) => (this.cv = cv));
  }
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toastr.success(
          `${this.cv.firstname} ${this.cv.name} a été préselectionné pour embauche`
        );
      } else {
        this.toastr.warning(
          `${this.cv.firstname} ${this.cv.name} est déjà préselectionné pour embauche`
        );
      }
    }
  }
}

import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      'teacher',
      'rotating_card_profile2.png',
      '12345',
      40
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      'enfant',
      'rotating_card_profile3.png',
      '12345',
      4
    ),
  ];
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}

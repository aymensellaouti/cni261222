import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', '12345', 40),
      new Cv(2, 'sellaouti', 'skander', 'enfant', '    ', '12345', 4),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
}

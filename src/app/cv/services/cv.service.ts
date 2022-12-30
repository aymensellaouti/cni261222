import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private _selectCvSubject = new Subject<Cv>();
  selectItem$ = this._selectCvSubject.asObservable();
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
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv: Cv) => cv.id == id) ?? null;
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv:Cv) {
    this._selectCvSubject.next(cv);
  }
}

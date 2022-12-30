import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API } from '../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private _selectCvSubject = new Subject<Cv>();
  selectItem$ = this._selectCvSubject.asObservable();
  private cvs: Cv[] = [];
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', '12345', 40),
      new Cv(2, 'sellaouti', 'skander', 'enfant', '    ', '12345', 4),
    ];
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv);
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Observable<Cv | null> {
    return this.http.get<Cv>(API.cv + id);
  }
  deleteCv(id: number): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token') ?? ''
    );
    return this.http.delete<Cv>(API.cv + id, { headers });
  }
  getFAkeCvById(id: number): Cv | null {
    return this.cvs.find((cv: Cv) => cv.id == id) ?? null;
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index != -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  selectCv(cv: Cv) {
    this._selectCvSubject.next(cv);
  }
}

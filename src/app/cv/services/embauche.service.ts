import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() {}

  getEmbauchees(): Cv[] {
    return this.embauchees;
  }

  embaucher(cv: Cv): boolean {
    const index = this.embauchees.indexOf(cv);
    // itha kan ma 3andekch el cv zidou
    if (index === -1) {
      this.embauchees.push(cv);
      return true;
    }
    /* rahou deja maoujoud manich bech nzidou */
    return false;
  }
}

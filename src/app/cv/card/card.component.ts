import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cv: Cv | null = null;
}

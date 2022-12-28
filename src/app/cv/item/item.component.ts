import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() cv: Cv | null = null;
  @Output() selectItem = new EventEmitter<Cv>();
  @Input() size = 50;
  sendCv(): void {
    if (this.cv) this.selectItem.emit(this.cv);
  }
}

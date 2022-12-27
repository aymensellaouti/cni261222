import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() cvs: Cv[] = [];
  @Output() forwardSelectedItem = new EventEmitter<Cv>();
  forwardCv(cv: Cv): void {
    this.forwardSelectedItem.emit(cv);
  }
}

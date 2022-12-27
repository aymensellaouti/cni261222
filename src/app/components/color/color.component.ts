import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  @Input()
  defaultColor = 'red';
  color = '';
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  reset() {
    this.changeColor(this.defaultColor);
  }
  ngOnInit() {
    this.color = this.defaultColor;
  }
}

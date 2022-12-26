import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  isHidden = false;
  name = 'cni';
  showHideButtonMessage = this.isHidden == false ? 'hide' : 'show';
  inputContent = '';
  constructor() {}

  showHide() {
    this.isHidden = !this.isHidden;
    this.showHideButtonMessage = this.isHidden == false ? 'hide' : 'show';
  }
  changeInputContent(newValue: string) {
    this.inputContent = newValue;
  }
}

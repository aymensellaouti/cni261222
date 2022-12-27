import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'yellow';
  @Input() out = 'red';
  ngOnInit() {
    this.bgc = this.out;
  }
  @HostBinding('style.backgroundColor')
  bgc = 'red';
  constructor() {}

  /* Wa9tech ou kifech  */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = this.out;
  }
}

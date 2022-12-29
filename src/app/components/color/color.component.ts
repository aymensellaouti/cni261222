import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ColorRouteParam {
  color: string;
  favoriteColor: string;
}
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  @Input()
  defaultColor = 'red';
  color = '';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.color = this.defaultColor;
    this.activatedRoute.params.subscribe((routeParams) => {
      this.defaultColor = routeParams['favoriteColor'];
      this.color = routeParams['color'];
    });
    this.activatedRoute.queryParams.subscribe((qp) => {
      console.log(qp);
    });
  }
  changeColor(newColor: string): void {
    this.color = newColor;
  }
  reset() {
    this.changeColor(this.defaultColor);
  }
}

import { Component } from '@angular/core';
import { Observable, map, filter } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css'],
})
export class TestObservableComponent {
  observable$: Observable<number>;
  constructor(private toastr: ToastrService) {
    this.observable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.observable$.subscribe((val) => {
      console.log(val);
    });
    this.observable$
      .pipe(
        map((data) => data * 3),
        filter((x) => x % 2 == 0)
      )
      .subscribe({
        next: (haja) => {
          this.toastr.info('' + haja);
        },
        complete: () => {
          this.toastr.error('BOOM');
        },
      });
  }
}

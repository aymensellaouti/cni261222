import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-test-http',
  templateUrl: './test-http.component.html',
  styleUrls: ['./test-http.component.css'],
})
export class TestHttpComponent {
  todos$: Observable<Todos[]>;
  constructor(private http: HttpClient) {
    this.todos$ = this.http.
    get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }
}

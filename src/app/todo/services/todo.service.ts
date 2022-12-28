import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerSevice } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerSevice) {}
  getTodos(): Todo[] {
    return this.todos;
  }
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  logTodos(): void {
    this.loggerService.logger(this.todos);
  }
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }
}

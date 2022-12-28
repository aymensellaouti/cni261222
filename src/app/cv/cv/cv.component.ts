import { Component, Inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerSevice } from '../../services/logger.service';
import { LOGGER_TOKEN } from '../../injectionTokens/logger.token';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(
    private loggerService: LoggerSevice,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService
  ) {
    this.loggerService.logger('cc');
    this.sayHelloService.hello();
  }

  ngOnInit() {
    this.toastr.info('Bienvenu dans la cvTech');
  }
  date = new Date();
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', 'as.jpg', '12345', 40),
    new Cv(2, 'sellaouti', 'skander', 'enfant', '    ', '12345', 4),
  ];
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    /*     this.todoService.logTodos(); */
  }
}

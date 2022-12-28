import { Component, Inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerSevice } from '../../services/logger.service';
import { LOGGER_TOKEN } from '../../injectionTokens/logger.token';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  date = new Date();
  selectedCv: Cv | null = null;
  cvs: Cv[] = [];

  constructor(
    private loggerService: LoggerSevice,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.loggerService.logger('cc');
    this.sayHelloService.hello();
    this.cvs = this.cvService.getCvs();
  }

  ngOnInit() {
    this.toastr.info('Bienvenu dans la cvTech');
  }
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
    /*     this.todoService.logTodos(); */
  }
}

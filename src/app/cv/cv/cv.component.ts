import { Component, Inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerSevice } from '../../services/logger.service';
import { LOGGER_TOKEN } from '../../injectionTokens/logger.token';
import { SayHelloService } from '../../services/say-hello.service';
import { TodoService } from '../../todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  date = new Date();
  /*   selectedCv: Cv | null = null; */
  cvs: Cv[] = [];
  nb = 0;

  constructor(
    private loggerService: LoggerSevice,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.loggerService.logger('cc');
    this.sayHelloService.hello();
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(
          `Problème avec le serveur veuillez consulter l'admin`
        );
      },
    });
    this.cvService.selectItem$.pipe(distinctUntilChanged()).subscribe(() => {
      this.nb++;
    });
  }

  ngOnInit() {
    this.toastr.info('Bienvenu dans la cvTech');
  }
  /*   getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
  } */
}

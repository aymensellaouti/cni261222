import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/compononets/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { FrontComponent } from './component/front/front.component';
import { AdminComponent } from './component/admin/admin.component';
import { NF404Component } from './component/nf404/nf404.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  /* /color/gren/blue */
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'accueil', component: FirstComponent },
      { path: 'cv', component: CvComponent },
      { path: 'cv/:id', component: DetailCvComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'color/:favoriteColor/:color', component: ColorComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'word', component: MiniWordComponent }],
  },
  { path: 'login', component: LoginComponent },
  { path: ':var', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

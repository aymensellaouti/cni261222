import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';
import { FrontComponent } from './component/front/front.component';
import { AdminComponent } from './component/admin/admin.component';
import { NF404Component } from './component/nf404/nf404.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { TodoComponent } from './todo/compononets/todo/todo.component';

const routes: Routes = [
  /* /color/gren/blue */
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'accueil', component: FirstComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'color/:favoriteColor/:color', component: ColorComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'word', component: MiniWordComponent }],
  },
  {
    path: 'cv',
    loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
  },
  { path: 'login', component: LoginComponent },
  { path: ':var', component: SecondComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

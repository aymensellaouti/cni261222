import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/compononets/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second.component';

const routes: Routes = [
  /* /color/gren/blue */
  { path: '', component: FirstComponent },

  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color/:favoriteColor/:color', component: ColorComponent },
  { path: 'word', component: MiniWordComponent },
  { path: ':var', component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

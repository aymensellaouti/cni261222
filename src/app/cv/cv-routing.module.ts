import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvComponent } from './cv/cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';


const routes: Routes = [
      { path: '', component: CvComponent },
      { path: '/add', component: AddCvComponent, canActivate: [AuthGuard] },
      { path: '/:id', component: DetailCvComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvRoutingModule {}

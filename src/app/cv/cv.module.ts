import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../pipes/cv/default-image.pipe';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cv/cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CvRoutingModule } from './cv-routing.module';
import { EmbaucheComponent } from './embauche/embauche.component';

@NgModule({
  declarations: [
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    DetailCvComponent,
    AddCvComponent,
    DefaultImagePipe,
    EmbaucheComponent,
  ],
  imports: [CommonModule, CvRoutingModule],
})
export class CvModule {}

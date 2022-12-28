import { Pipe, PipeTransform } from '@angular/core';
import { CONSTANTES } from '../../config/constantes.config';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(image: string): string {
    if (!image.trim()) return CONSTANTES.defaultImage;
    return image;
  }
}

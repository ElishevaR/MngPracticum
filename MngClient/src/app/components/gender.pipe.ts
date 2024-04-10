import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
  standalone: true
})
export class GenderPipe implements PipeTransform {

  transform(gender: number): string {
    return gender === 0 ? '../../../../assets/img/Asset 2@4x.png' : '../../../../assets/img/female.png';
  }

}

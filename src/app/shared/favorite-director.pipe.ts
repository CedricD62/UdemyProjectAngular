import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteDirector'
})
export class FavoriteDirectorPipe implements PipeTransform {

  transform(director: string, favorite?: string): string {
    if(director === favorite){
      return director.toUpperCase();
    }
    return director;
  }

}

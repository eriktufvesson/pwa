import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the OnlyVisible pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'onlyvisible'
})
@Injectable()
export class OnlyVisible {
  /*
    Takes a value and makes it lowercase.
   */
  transform(cats) {
    return cats.filter(cat => !cat.hidden);
  }
}

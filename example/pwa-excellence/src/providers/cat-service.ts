import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cat } from '../models/cat';

/*
  Generated class for the CatService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CatService {

  constructor(public http: Http) {
    console.log('Hello CatService Provider');
  }

  getCats() {
    return this.http.get('https://kittenapi.herokuapp.com/cats/hats/10')
      .map(res => {
        let rawData = res.json();
        let cats = new Array<Cat>();
        rawData.forEach(cat => {
          cat.url = cat.url.replace('http://', 'https://');
          cats.push(new Cat(cat.id, cat.url, cat.source_url));
        });
        return cats;
      });
  }

}
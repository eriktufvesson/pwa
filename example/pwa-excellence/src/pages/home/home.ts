import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { CatService } from '../../providers/cat-service';
import { Cat } from '../../models/cat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cats: Array<Cat> = [];

  constructor(public navCtrl: NavController, private catService: CatService) {

  }

  ngOnInit() {
    this.catService.getCats()
      .subscribe(cats => {
        this.cats = cats;
        console.log(cats);
      });
  }

  hideCat(cat: Cat) {
    cat.hidden = true;
  }

  setDefaultImg(cat: Cat) {
    cat.url = '/assets/imgs/cat-default.jpg';
  }

}

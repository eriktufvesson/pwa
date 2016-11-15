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
      });
  }

  hideCat(cat: Cat) {
    cat.hidden = true;
  }

  setDefaultImg(cat: Cat) {
    cat.url = '/assets/imgs/cat-default.jpg';
  }

  doRefresh(refresher) {
    this.catService.getCats()
      .subscribe(cats => {
        this.cats = cats;
        refresher.complete();
      });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    this.catService.getCats()
      .subscribe(cats => {
        this.cats = [...cats];
        
        console.log('Async operation has ended');
        infiniteScroll.complete();
      });

  }
}

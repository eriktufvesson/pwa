import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';


@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform, private toastCtrl: ToastController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // StatusBar.styleDefault();
      // Splashscreen.hide();
      var self = this;
      if ('serviceWorker' in navigator) {
        navigator['serviceWorker'].onmessage = function (event) {
          console.log("Broadcasted SW : ", event.data);

          var data = event.data;

          self.showAlert(data);
        };
      }
    });
  }

  showAlert(message) {
    let toast = this.toastCtrl.create({
      // title: message.title,
      message: message.body,
      duration: 3000
      // buttons: ['OK']
    });
    toast.present();
  }
}

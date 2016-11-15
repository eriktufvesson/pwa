import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CatService } from '../providers/cat-service';
import { OnlyVisible } from '../pipes/only-visible';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OnlyVisible
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    CatService
  ]
})
export class AppModule {}

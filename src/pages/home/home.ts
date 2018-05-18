import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  content: string = '# This line comes from home.ts it is a H1 header';

  constructor(public navCtrl: NavController) {

  }

}

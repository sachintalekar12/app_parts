import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {HomePage} from '../home/home';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }

  signin(){
    this.navCtrl.pop(HomePage);
    console.log("workink");
    }
  

}

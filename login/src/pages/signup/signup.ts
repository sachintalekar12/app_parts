import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController) {
  }

  signin(){
    this.navCtrl.push(HomePage);
    console.log("workink");
    }
  

}

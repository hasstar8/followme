import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public nav: NavController) {
  }
  // register and go to home page
  register() {
    this.nav.setRoot(HomePage);
  }

  // go to login page
  
}
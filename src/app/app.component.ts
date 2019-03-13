import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { ProfilePage } from "../pages/profile/profile";
import { MapPage } from "../pages/map/map";
// import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  appMenuItems: Array<MenuItem>;
  items: Observable<any[]>;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    // db: AngularFirestore
  ) {
    this.initializeApp();
    // this.items = db.collection('items').valueChanges();

    this.appMenuItems = [
      {title: 'Accueil', component: HomePage, icon: 'home'},
      {title: 'Messager', component: HomePage, icon: 'mail'},
      {title: 'Carte', component: MapPage, icon: 'map'},
      {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'},
      {title: 'Profil', component: ProfilePage, icon: 'contact'},
      {title: 'Deconnexion', component: LoginPage, icon: 'log-out'}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }
  profile(){
    this.nav.setRoot(ProfilePage);
  }
  map(){
    this.nav.setRoot(MapPage);
  }

}

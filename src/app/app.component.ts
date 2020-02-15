import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

public menuItems = [
  {
    title: 'Home',
    url: 'home'
  },
  {
    title: 'About Us',
    url: 'about-us'
  },
  {
    title: 'Price List',
    url: 'price-list'
  },
  {
    title: 'Meet the Stylists',
    url: 'meet-stylists'
  },
  {
    title: 'Contact Us',
    url: 'contact-us'
  },
];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

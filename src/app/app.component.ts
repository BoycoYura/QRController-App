import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {Injectable, ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';
import { NumScannerPage } from '../pages/num-scanner/num-scanner';
import { ProfilePage } from '../pages/profile/profile';
import { MenuController } from 'ionic-angular';
import { HistoryPage} from '../pages/history/history';

@Component({
  templateUrl: 'app.html'
})



export class MyApp {
  rootPage:any = LoginPage;

  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openPageHome(){
    this.nav.push(HomePage);
    this.toggleMenu();  
  }

  openPageNumber(){
    this.nav.push(NumScannerPage);
    this.toggleMenu();
  }

  openProfile(){
    this.nav.push(ProfilePage);
    this.toggleMenu();
  }

  openHistory(){
    this.nav.push(HistoryPage);
    this.toggleMenu();
  }

}


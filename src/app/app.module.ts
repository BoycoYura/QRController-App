import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule }   from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage} from '../pages/login/login';
import {InterceptorModule} from './interceptor.module';
import { NumScannerPage} from '../pages/num-scanner/num-scanner';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage} from '../pages/history/history';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NumScannerPage,
    ProfilePage,
    HistoryPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    InterceptorModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NumScannerPage,
    ProfilePage,
    HistoryPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

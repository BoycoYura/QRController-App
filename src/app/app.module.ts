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
import { NumScannerPage} from '../pages/num-scanner/num-scanner';
import { ProfilePage } from '../pages/profile/profile';
import { HistoryPage} from '../pages/history/history';
import {NgxPaginationModule} from 'ngx-pagination';
import {BiletInfoComponent } from '../components/bilet-info/bilet-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NumScannerPage,
    ProfilePage,
    HistoryPage,
    BiletInfoComponent,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NumScannerPage,
    ProfilePage,
    HistoryPage,
    BiletInfoComponent,
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

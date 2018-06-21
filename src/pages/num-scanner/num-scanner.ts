import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
/**
 * Generated class for the NumScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'num-scanner',
  segment: 'some-path'
})
@Component({
  selector: 'page-num-scanner',
  templateUrl: 'num-scanner.html',
})

export class NumScannerPage {

  scan_data = {
    "ticket_number": ""
  };

  private _options = { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://xn--c1adanjfljige2b7b5c.xn--80adxhks/api/auth' }) };

  private apiUrl ='http://xn--c1adanjfljige2b7b5c.xn--80adxhks/api/auth';

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,private httpClient: HttpClient) {
  }

  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }

  
//Добавить отправку токена авторизации
  ScanNumber(){
    this.httpClient.post(this.apiUrl,this.scan_data).subscribe(
      res => {
        var serialObj = JSON.stringify(res);
        console.log("Info sent success:");
        console.log(res)
      },
      err => {
        console.log(err.error);
        alert("Fail");
      });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad NumScannerPage');
  }

}

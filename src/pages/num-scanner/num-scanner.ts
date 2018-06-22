import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';
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

  public reqStatus;
  public number_ticket;

  public ticket_id;
  public isDisabled = false;
  private apiUrl ='http://greenworld.by/api/check_ticket?access_token=';
  // private apiUrl ='/api/check_ticket?access_token=';

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,private httpClient: HttpClient) {
    this.number_ticket = null;
    this.reqStatus =  null;
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

  refresh(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
    this.isDisabled = false;
  }

//Добавить отправку токена авторизации
  ScanNumber(){
    var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

    this.httpClient.get(this.apiUrl+access_token.token+"&"+"ticket_id="+this.ticket_id).subscribe(
      res => {
        var serialObj = JSON.stringify(res);
        console.log("Info sent success:");
        console.log(res);
        this.number_ticket = true;
        this.reqStatus =  true;
        this.isDisabled = true;
        console.log(this.isDisabled);
      },
      err => {
        var er_status = err.status;
        this.number_ticket = true;
        this.isDisabled = true;
        
        if(er_status == '404'){
          this.reqStatus =  false;
        }

        if(er_status == '500'){
          alert("Ошибка сервера");
        }
      });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad NumScannerPage');
  }

}

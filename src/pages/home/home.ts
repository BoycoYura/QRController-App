import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { MenuController } from 'ionic-angular';
import { NumScannerPage} from '../num-scanner/num-scanner';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  options: BarcodeScannerOptions;
  encodText:string='';
  encodedData:any={};
  scanData:any= {};

  public reqStatus;

  private apiUrl ='/api/check_ticket?access_token=';

  constructor(public navCtrl: NavController, public scanner:BarcodeScanner, public menuCtrl: MenuController,private httpClient: HttpClient) {
    menuCtrl.enable(true);
    this.reqStatus = null;
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

  scan(){
    this.options = {
      prompt: 'Scan you BarCode'
    };

    this.scanner.scan(this.options).then((data)=>{
      this.scanData = data;

      var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

      this.httpClient.get(this.apiUrl+access_token.token+"&"+"ticket_id="+this.scanData.text).subscribe(
        res => {
          var serialObj = JSON.stringify(res);
          console.log("Info sent success:");
          console.log(res);
          this.reqStatus =  true;
        },
        err => {
          var er_status = err.status;
          
          if(er_status == '404'){
            this.reqStatus =  false;
          }
  
          if(er_status == '500'){
            alert("Ошибка сервера");
          }
        });
    },(err)=>{
      console.log("Error:",err);
    })
  }

  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data)=>{
      this.encodedData = data;
    },(err)=>{
      console.log("Error:",err);
    })
  }

}

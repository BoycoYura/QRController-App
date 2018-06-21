import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { MenuController } from 'ionic-angular';
import { NumScannerPage} from '../num-scanner/num-scanner';

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

  constructor(public navCtrl: NavController, public scanner:BarcodeScanner, public menuCtrl: MenuController) {
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

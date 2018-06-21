import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HomePage } from '../home/home';
import {RequestOptions, Request, Headers } from '@angular/http';
import {InterceptorModule} from '../../app/interceptor.module';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  auth_data = {
    "login": "",
    "password": ""
  };

  private _options = { headers: new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://xn--c1adanjfljige2b7b5c.xn--80adxhks/api/auth' }) };

  
  

  private apiUrl ='http://xn--c1adanjfljige2b7b5c.xn--80adxhks/api/auth';

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClient: HttpClient) {
  }

  

  Login(){

    // let headers = new HttpHeaders();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
  
    // headers.append('Access-Control-Allow-Origin', 'http://progulki.nermolrx.beget.tech/api');
    // headers.append('Access-Control-Allow-Credentials', 'true');
  
    // headers.append('GET', 'POST', 'OPTIONS');

    console.log("HEADERS:");
    console.log(this._options);

    // this.httpClient.post(this.apiUrl,this.auth_data,this._options).subscribe(
    //   res => {
    //     var serialObj = JSON.stringify(res);
    //     localStorage.setItem("usInfo", serialObj);
    //     console.log("Logined user info:");
    //     console.log(res)
    //     this.navCtrl.push(HomePage);
    //   },
    //   err => {
    //     console.log(err.error);
    //     alert("Fail");
    //   });
      this.navCtrl.push(HomePage);
      console.log('Login action End');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { HomePage } from '../home/home';

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

  private apiUrl ='http://greenworld.by/api/auth';
  // private apiUrl ='/api/auth';

  constructor(public navCtrl: NavController, public navParams: NavParams,private httpClient: HttpClient) {
  }


  Login(){
    var formData = new FormData();
    formData.append("login", this.auth_data.login);
    formData.append("password", this.auth_data.password);

    this.httpClient.post(this.apiUrl,formData).subscribe(
      res => {
        var serialObj = JSON.stringify(res);
        localStorage.setItem("usInfo", serialObj);
        console.log("Logined user info:");
        console.log(res);
        this.navCtrl.push(HomePage);
      },
      err => {
        var er_status = err.status;
        this.auth_data.password = '';

        if(er_status == '401'){
          alert("Вы сделали ошибку при вводе логина или пароля, попробуйте ещё раз");
        }

        if(er_status == '406'){
          alert("Поля логин и пароль не должны быть пустыми, попробуйте ещё раз");
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}

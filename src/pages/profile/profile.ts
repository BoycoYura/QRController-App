import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginPage} from '../login/login';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  private apiUrl ='http://greenworld.by/api/user?access_token=';
  // private apiUrl ='/api/user?access_token=';

  private apiLog ='http://greenworld.by/api/user/logout';
  // private apiLog = '/api/user/logout';

  public profile_info;

  public firstname;

  public lastname;

  public position;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController,private httpClient: HttpClient) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getProfile(){
    var access_token = JSON.parse( localStorage.getItem("usInfo"));

    this.httpClient.get(this.apiUrl+access_token.token).subscribe(
      res => {
        this.profile_info = res;

        this.firstname = this.profile_info.firstname;
        this.lastname = this.profile_info.lastname;
        this.position = this.profile_info.position;

        console.log(res);
      },
      err => {
        var er_status = err.status;

        if(er_status == '500'){
          alert("Ошибка сервера");
        }
      });
  }

  logout(){
    var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

    var formData = new FormData();
    formData.append("access_token", access_token.token);

    this.httpClient.post(this.apiLog,formData).subscribe(
      res => {
        console.log(res);
        this.navCtrl.push(LoginPage);
      },
      err => {
        var er_status = err.status;
        alert(er_status);
      });
  }

  ngOnInit() {
    this.getProfile(); 
  }
  

}

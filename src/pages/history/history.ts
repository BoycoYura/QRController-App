import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  private apiUrl ='/api/tickets_history?access_token=';

  public Alltickets;

  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, private httpClient: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  getTickets(){

    var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

    this.httpClient.get(this.apiUrl+access_token.token).subscribe(
      res => {
        this.Alltickets = res;

        if(this.Alltickets.tickets.length == 0){
          alert("History is empty");
        }
        console.log(res);
      },
      err => {
        var er_status = err.status;

        if(er_status == '500'){
          alert("Ошибка сервера");
        }
      });
  }

  ngOnInit() {
    this.getTickets(); 
  }

}

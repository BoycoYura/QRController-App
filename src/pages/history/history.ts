import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ModalController } from 'ionic-angular';
import {BiletInfoComponent } from '../../components/bilet-info/bilet-info';
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'history',
  segment: 'history-path'
})
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  // private apiUrl ='http://greenworld.by/api/tickets_history?access_token=';
  private apiUrl ='/api/tickets_history?access_token=';

  public TicketsMas;
  
  public Alltickets;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menuCtrl: MenuController, private httpClient: HttpClient,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  openInfo(ticket_id){
    const modal = this.modalCtrl.create(BiletInfoComponent,{ ticketId: ticket_id });
    modal.present();
  }

  getTickets(){

    var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

    this.httpClient.get(this.apiUrl+access_token.token).subscribe(
      res => {
        this.Alltickets = res;

        this.TicketsMas = this.Alltickets.tickets;
        

        console.log("Tickets All:");
        console.log(this.TicketsMas );

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

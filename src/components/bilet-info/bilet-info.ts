import { Component } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ViewController,NavParams } from 'ionic-angular';
/**
 * Generated class for the BiletInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bilet-info',
  templateUrl: 'bilet-info.html'
})
export class BiletInfoComponent {

  // private apiUrl ='http://greenworld.by/api/tickets_history?access_token=';
  private apiUrl ='/api/ticket?access_token=';

  public Ticket_id;

  text: string;

  public Ticket;

  public code;
  public date;
  public deliver;
  public from;
  public id;
  public route_type;
  public ship;
  public state;
  public summary;
  public time;
  public to;
  public type;
  public walk_name;

  toback() {
    this.viewCtrl.dismiss();
  }

  constructor(public viewCtrl: ViewController,private httpClient: HttpClient,params: NavParams) {
    this.Ticket_id = params.get('ticketId');
  }


  getTicket(){
    var access_token = JSON.parse( localStorage.getItem("usInfo")) ;

    this.httpClient.get(this.apiUrl+access_token.token+"&"+"ticket_id="+this.Ticket_id).subscribe(
      res => {
        var serialObj = JSON.stringify(res);
        console.log("Bilet info:");
        console.log(res);

        this.Ticket = res;

        this.code = this.Ticket.code;
        this.date = this.Ticket.date;
        this.deliver = this.Ticket.deliver;
        this.from = this.Ticket.from.area;
        this.id = this.Ticket.id;
        this.route_type = this.Ticket.route_type;
        this.ship = this.Ticket.ship;
        this.state = this.Ticket.state;
        this.summary = this.Ticket.summary;
        this.time = this.Ticket.time;
        this.to = this.Ticket.to.area;
        this.type = this.Ticket.type;
        this.walk_name =  this.Ticket.walk_name;

        console.log(this.Ticket.deliver);
        
      },
      err => {
        var er_status = err.status;
      });
  }

    ngOnInit() {
      this.getTicket(); 
    }
}

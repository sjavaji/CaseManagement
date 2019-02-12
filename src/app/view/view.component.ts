import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  body: any;
  reqHeader: HttpHeaders;
  api: any = 'https://training9-dev-ed.my.salesforce.com/services/oauth2/token';
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  GetCases() {

    this.reqHeader = new HttpHeaders();
    this.reqHeader.set ('Access-Control-Allow-Origin', '*');
    this.reqHeader.set ('Access-Control-Allow-Methods', 'DELETE, POST, GET, OPTIONS');
    this.reqHeader.set ('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    this.body = {
      grant_type: 'password',
      crossOrigin : true,
      client_id: '3MVG9YDQS5WtC11rYht7kc76KhK6x_5knZe5S2CJu9orWLwguJ7axBLJVYIC8fj80rw.L5Eib0sRkk9TaXwwt',
      client_secret: '1037031024583293084',
      username: 'sudhirj9@gmail.com',
      password: 'Saikriti9#7tKfVQsvKBYhDnDjwjDRvYY0'
    };
    const obs = this.http.post(this.api, this.body, {headers: this.reqHeader});
    obs.subscribe((resp) => {console.log('resp-error')} );
  }

}

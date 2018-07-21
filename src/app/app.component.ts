import { Component } from '@angular/core';
import { ChatAdapter } from './components/ng-chat';
import { GlobeAdapter } from './services/chatAdapter';
import { HttpService } from './services/http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  userId = localStorage.getItem('globUser') ? JSON.parse(localStorage.getItem('globUser')).id : null;
  http: HttpService;

  constructor(private _signalRAdapter: GlobeAdapter) {

    }

  public adapter: ChatAdapter = this._signalRAdapter;
}

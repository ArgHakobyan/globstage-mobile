import { Component } from '@angular/core';
import { ChatAdapter } from './components/ng-chat';
import { GlobeAdapter } from './services/chatAdapter';
import { HttpService } from './services/http.service';
import { getFromLocalStorage } from './utils/local-storage';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  userId = getFromLocalStorage('GLOBE_USER') ? getFromLocalStorage('GLOBE_USER').id : null;
  http: HttpService;

  constructor(private chatAdapter: GlobeAdapter) {

    }

  public adapter: ChatAdapter = this.chatAdapter;
}

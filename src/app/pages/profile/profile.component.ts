import { Component, OnInit } from '@angular/core';
import {GlobTabsComponent} from '../../components/glob-tabs/glob-tabs.component';
import { WallComponent } from '../../components/wall/wall.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  entryComponents: [GlobTabsComponent, WallComponent],
})
export class ProfileComponent implements OnInit {
  

  
  constructor() { }




  ngOnInit() {

  }

}

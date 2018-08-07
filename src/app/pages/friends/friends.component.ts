import { Component, OnInit } from '@angular/core';
import { FriendsService } from "../../services/friends.service";
import {getFromLocalStorage} from "../../utils/local-storage";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friendRequests: any[];

  constructor(private friendService: FriendsService,) { }


  ngOnInit() {
    this.friendService.getFriends(getFromLocalStorage('GLOBE_USER').id).subscribe((res: any[]) => {
      this.friendRequests = res;
      console.log(res);
    })
  }

}

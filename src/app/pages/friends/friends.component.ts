import { Component, OnInit } from '@angular/core';
import { FriendsService } from "../../services/friends.service";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  friendRequests: any[];

  constructor(private friendService: FriendsService,) { }


  ngOnInit() {
    this.friendService.getFriends().subscribe((res: any[]) => {
      this.friendRequests = res;
      console.log(res);
    })
  }

}

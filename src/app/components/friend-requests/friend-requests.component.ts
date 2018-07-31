import { Component, OnInit } from '@angular/core';
import { FriendsService } from "../../services/friends.service";
import { MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {

  friendRequests: any[];

  constructor(private friendService: FriendsService, public snackBar: MatSnackBar,) { }

  ngOnInit() {
    this.getFriendRequests();

  }

  getFriendRequests() {
    this.friendService.getFriendRequests().subscribe((res: any[]) => {
      this.friendRequests = res;
      console.log(res);
    })

  }

}

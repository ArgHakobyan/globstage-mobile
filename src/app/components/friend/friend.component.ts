import { Component, OnInit, Input } from '@angular/core';
import { FriendsService } from "../../services/friends.service";



@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {

  @Input() friend;
  friendRequests: any[];
  constructor(private friendService: FriendsService,) { }

  ngOnInit() {
  }

  deleteFriend() {
    this.friendService.deleteFriend(this.friend.id).subscribe((res: any[]) => {
      this.friendRequests = res;
    })

  }

}

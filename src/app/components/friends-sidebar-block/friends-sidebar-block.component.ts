import { Component, OnInit, Input } from '@angular/core';
import { FriendsService } from "../../services/friends.service";


@Component({
  selector: 'app-friends-sidebar-block',
  templateUrl: './friends-sidebar-block.component.html',
  styleUrls: ['./friends-sidebar-block.component.scss']
})
export class FriendsSidebarBlockComponent implements OnInit {

  public friends;
  @Input() userId;
  friendsOnline: any[];

  constructor(private friendService: FriendsService,) { }

  ngOnInit() {
    this.friendService.getFriends(this.userId).subscribe(res =>{
      this.friends = res;
    })
  }

}

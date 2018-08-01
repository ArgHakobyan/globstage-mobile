import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FriendsService } from '../../../services/friends.service';
import { getFromLocalStorage } from '../../../utils/local-storage';



@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.scss']
})
export class FriendRequestComponent implements OnInit {

  @Input() request;
  public  friend_id;

  constructor(private http: HttpClient,private friendService: FriendsService,) { }

  ngOnInit() {
  }

  confirmFriend() {
    this.friendService.confirmFriend({user_id: getFromLocalStorage('GLOBE_USER').id, friend_id: this.request.user.id}).subscribe(res => {

    })

  }
  unConfirmFriend() {
    this.friendService.unConfirmFriend({user_id: getFromLocalStorage('GLOBE_USER').id, friend_id: this.request.user.id}).subscribe(res => {

    })

  }


}

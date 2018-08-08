import { Component, Input, OnInit} from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { MatSnackBar } from '@angular/material';
import {getFromLocalStorage} from "../../utils/local-storage";

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.scss']
})
export class UserProfileImageComponent implements OnInit {

  @Input() user;
  isFriend = false;
  following = false;

  constructor(
    private friendService: FriendsService,
    public snackBar: MatSnackBar,
  ) {
  }

  ngOnInit() {
    console.log(this.user);
    if (this.user.friends && this.user.friends.filter(u => u.friend_id === getFromLocalStorage('GLOBE_USER').id).length > 0) {
      this.isFriend = true;
    }


    if (this.user.friends.filter(u => u.friend_id === getFromLocalStorage('GLOBE_USER').id)[0] && this.user.friends.filter(u => u.friend_id === getFromLocalStorage('GLOBE_USER').id)[0].subscription === 1) {
      this.following = true;
    }

    console.log(this.isFriend, this.following);
  }



  addFriend() {
    this.friendService.addFriend(this.user.id).subscribe(res => {
    },
      error => {
        this.snackBar.open(`You already sent a friend request to ${this.user.user_name}.`, 'ok', {duration: 3000});
      });
  }

  removeFriend() {
    this.friendService.deleteFriend(this.user.id).subscribe(res => {
      console.log(res);
    });
  }

  addFollow() {
    this.friendService.addFollow({
      author_id: getFromLocalStorage('GLOBE_USER').id, user_id: getFromLocalStorage('GLOBE_USER').id,
      follow_to: this.user.id, to: "user"
    }).subscribe(res => {
      this.snackBar.open(`You are following ${this.user.user_name}  now.`, 'ok', {duration: 3000});
    });
  }

  deleteFollow() {
    this.friendService.deleteFollow(this.user.id, 'user').subscribe(res => {
      this.snackBar.open(`You are not following ${this.user.user_name} now.`, 'ok', {duration: 3000});
    });
  }

  blockUser(){
    this.friendService.blockUser(this.user.id).subscribe(res => {
      this.snackBar.open(`You have blocked ${this.user.user_name}.`, 'ok', {duration: 3000});
    })
  }
}


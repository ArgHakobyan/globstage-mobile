import { Component, Input, OnInit} from '@angular/core';
import { FriendsService } from '../../services/friends.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-profile-image',
  templateUrl: './user-profile-image.component.html',
  styleUrls: ['./user-profile-image.component.scss']
})
export class UserProfileImageComponent implements OnInit {

  @Input() user;
  constructor(
      private friendService: FriendsService,
      public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

    addFriend() {
      this.friendService.addFriend(this.user.id).subscribe(res => {

      });


    }

}

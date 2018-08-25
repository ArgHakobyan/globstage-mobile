import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit {

  public detailsToggle;
  @Input() user;

  constructor(
      private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    log(this.user);
    this.user.user_contact = JSON.parse(this.user.user_contact);
    this.user.user_interests = JSON.parse(this.user.user_interests);
  }

  show1Toggle() {
    this.detailsToggle = (this.detailsToggle === true) ? false : true;
  }

}

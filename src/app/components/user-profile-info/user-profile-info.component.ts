import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile-info',
  templateUrl: './user-profile-info.component.html',
  styleUrls: ['./user-profile-info.component.scss']
})
export class UserProfileInfoComponent implements OnInit {

  public detailsToggle;


  constructor() { }

  ngOnInit() {
  }

  show1Toggle() {
    this.detailsToggle = (this.detailsToggle === true) ? false : true;
  }

}

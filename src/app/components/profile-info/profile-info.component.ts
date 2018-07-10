import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public detailsToggle;

  constructor() { }

  ngOnInit() {
  }

  show1Toggle() {
	  this.detailsToggle = (this.detailsToggle === true)? false : true;
  }

}

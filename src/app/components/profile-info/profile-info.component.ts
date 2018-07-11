import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  public detailsToggle;
  public showInfo:boolean = true;
  public editInfo:boolean = false;
  public showContact:boolean = false;
  public showPersonal:boolean = false;  
  

  constructor() { }

  ngOnInit() {
  }

  show1Toggle() {
	  this.detailsToggle = (this.detailsToggle === true)? false : true;
  }
  editUserInfo(){
    this.showInfo = false;
    this.editInfo = true;
  }
  cancelEditInfo(){
    this.showInfo = true;
    this.editInfo = false;
  }
  editUserContact(){
    this.showContact = true;
  }
  cancelEditContact(){
    this.showContact = false;
  }
  editUserPersonal(){
    this.showPersonal = true;
  }
  cancelEditPersonal(){
    this.showPersonal = false;
  }

  

}

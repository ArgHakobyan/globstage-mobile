import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public viewVerification = false;
  public closeBtnVerify = true;

  constructor() { }

  ngOnInit() {
  }

  openVerification() {
    this.viewVerification = true;
    this.closeBtnVerify = false;
  }

}

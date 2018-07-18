import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-user-upload-image',
  templateUrl: './user-upload-image.component.html',
  styleUrls: ['./user-upload-image.component.scss']
})
export class UserUploadImageComponent implements OnInit {

  public infoToggle;


  constructor(public dialogRef: MatDialogRef<UserUploadImageComponent>) { }

  ngOnInit() {
  }

  showInfoToggle() {
    this.infoToggle = (this.infoToggle === true) ? false : true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

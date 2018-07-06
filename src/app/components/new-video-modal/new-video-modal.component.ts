import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-video-modal',
  templateUrl: './new-video-modal.component.html',
  styleUrls: ['./new-video-modal.component.scss']
})
export class NewVideoModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewVideoModalComponent>) { }

  ngOnInit() {
  }

  selected3 = "option1";

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}

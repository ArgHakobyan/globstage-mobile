import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-video-modal',
  templateUrl: './new-video-modal.component.html',
  styleUrls: ['./new-video-modal.component.scss']
})
export class NewVideoModalComponent implements OnInit {
  selected3 = 'option1';

  constructor(
    public dialogRef: MatDialogRef<NewVideoModalComponent>
  ) {

   }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

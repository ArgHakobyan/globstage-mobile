import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-audio-modal',
  templateUrl: './new-audio-modal.component.html',
  styleUrls: ['./new-audio-modal.component.scss']
})
export class NewAudioModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewAudioModalComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-album-modal',
  templateUrl: './new-album-modal.component.html',
  styleUrls: ['./new-album-modal.component.scss']
})
export class NewAlbumModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewAlbumModalComponent>) { }

  ngOnInit() {
  }

  selected1 = "option1";
  selected2 = "option1";

  onNoClick(): void {
    this.dialogRef.close();
  }
}

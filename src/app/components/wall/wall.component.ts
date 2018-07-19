import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { MatDialog } from '@angular/material';
import { NewAudioModalComponent } from '../new-audio-modal/new-audio-modal.component';
import { NewVideoModalComponent } from '../new-video-modal/new-video-modal.component';
import { UploadMediaAttachComponent } from '../../components/upload-media-attach/upload-media-attach.component';



@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  entryComponents: [
    NewAudioModalComponent,
    UploadMediaAttachComponent,
    NewVideoModalComponent],
})
export class WallComponent implements OnInit {
  public smileClass = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  smileFocusFunction() {
    this.smileClass = 'focusSmile';
  }
  // smileFocusOutFunction() {
  //   this.smileClass = '';
  // }

  openDialogAttach() {
    const dialogRef = this.dialog.open(UploadMediaAttachComponent, {
      height: 'auto',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogVideo() {
    const dialogRef = this.dialog.open(NewVideoModalComponent, {
      height: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  openDialogAudio() {
    const dialogRef = this.dialog.open(NewAudioModalComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }


}

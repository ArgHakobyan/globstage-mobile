import { Component, OnInit } from '@angular/core';
import { NewAudioModalComponent } from '../../new-audio-modal/new-audio-modal.component';
import { MatDialog } from '@angular/material';
import { PostsService } from '../../../services/posts.service';

@Component({
  selector: 'app-audios',
  templateUrl: './audios.component.html',
  styleUrls: ['./audios.component.scss'],
  entryComponents: [
    NewAudioModalComponent],
})
export class AudiosComponent implements OnInit {
  audios = [];
  constructor(
    public dialog: MatDialog,
    public postServices: PostsService,
  ) { }

  ngOnInit() {
    // this.postServices.getVideosPosts(JSON.parse(localStorage.getItem('GLOBE_USER')).id).subscribe(
    //   audios => {
    //     this.audios = audios.body;
    //     console.log(this.audios);
    //   });
  }

  openDialogAudio() {
    const dialogRef = this.dialog.open(NewAudioModalComponent, {
      height: '350px',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

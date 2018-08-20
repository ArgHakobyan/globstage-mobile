import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewVideoModalComponent} from '../../new-video-modal/new-video-modal.component';
import {VideoService} from '../../../services/video.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
  entryComponents: [
    NewVideoModalComponent],
})


export class VideosComponent implements OnInit {
  videos = [];

  constructor(
    public dialog: MatDialog,
    public videoServices: VideoService,
  ) {
  }

  ngOnInit() {
    // this.postServices.getVideosPosts('').subscribe()
    this.videoServices.getVideos().subscribe(
      (videos: any[]) => {
        this.videos = videos;
        console.log(videos);
      });
  }

  openDialogVideo() {
    const dialogRef = this.dialog.open(NewVideoModalComponent, {
      height: 'auto',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

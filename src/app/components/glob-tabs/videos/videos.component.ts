import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewVideoModalComponent} from '../../new-video-modal/new-video-modal.component';
import {PostsService} from '../../../services/posts.service';

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
    public postServices: PostsService,
  ) {
  }

  ngOnInit() {
    // this.postServices.getVideosPosts('').subscribe()
    this.postServices.getVideosPosts(JSON.parse(localStorage.getItem('GLOBE_USER')).id).subscribe(
      videos => {
        this.videos = videos.body;
        console.log(this.videos);
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

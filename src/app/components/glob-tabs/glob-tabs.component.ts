import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { MatDialog } from '@angular/material';
import { NewAlbumModalComponent } from '../new-album-modal/new-album-modal.component';
import { NewAudioModalComponent } from '../new-audio-modal/new-audio-modal.component';
import { NewVideoModalComponent } from '../new-video-modal/new-video-modal.component';
import { NewsComponent } from '../news/news.component';




declare var google: any;

@Component({
  selector: 'app-glob-tabs',
  templateUrl: './glob-tabs.component.html',
  styleUrls: ['./glob-tabs.component.scss'],
  entryComponents: [NewAlbumModalComponent,NewAudioModalComponent,NewVideoModalComponent,NewsComponent],
})
export class GlobTabsComponent implements OnInit {


  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    var mapProp = {
      center: new google.maps.LatLng(40.089099, 44.538189),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }


  openDialogAlbum() {
    const dialogRef = this.dialog.open(NewAlbumModalComponent, {
      height: 'auto'
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

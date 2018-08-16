import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewGroupModalComponent} from "../../components/new-group-modal/new-group-modal.component";
import {AlbumService} from '../../services/album.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-page',
  templateUrl: './album-page.component.html',
  styleUrls: ['./album-page.component.scss']
})
export class AlbumPageComponent implements OnInit {

  album;
  album_id;

  constructor(public dialog: MatDialog,public albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe( params => {
      this.album_id = params.id;
      this.albumService.getAlbumsImages(this.album_id).subscribe(res => {
          this.album = res;
          console.log(res);
        }
      );
    });
  }


  openDialogGroup() {
    const dialogRef = this.dialog.open(NewGroupModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

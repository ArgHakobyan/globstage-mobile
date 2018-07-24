import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { NewAlbumModalComponent } from '../new-album-modal/new-album-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = 'option1';

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit() {

  }
  openDialogAlbum() {
    const dialogRef = this.dialog.open(NewAlbumModalComponent, {
      height: 'auto',
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
  logOut() {
    localStorage.removeItem('auth');
    localStorage.removeItem('globUser');
    this.router.navigate(['']);
  }
}

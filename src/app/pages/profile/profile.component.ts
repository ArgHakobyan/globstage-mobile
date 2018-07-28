import { Component, OnInit } from '@angular/core';
import { GlobTabsComponent } from '../../components/glob-tabs/glob-tabs.component';
import { WallComponent } from '../../components/wall/wall.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserUploadImageComponent } from '../../components/user-upload-image/user-upload-image.component';
import { MatDialog } from '@angular/material';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  entryComponents: [GlobTabsComponent, WallComponent, UserUploadImageComponent],
})
export class ProfileComponent implements OnInit {

  public user = {};
  public  newStatus:boolean = false;
  public status:boolean = true;

  constructor(
    public authService: AuthService,
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/']);
    }

    this.user = JSON.parse(localStorage.getItem('globUser'));

}

logOut() {
  localStorage.removeItem('auth');
  localStorage.removeItem('globUser');
  this.router.navigate(['']);
}
openDialogUpload() {
  const dialogRef = this.dialog.open(UserUploadImageComponent, {
    height: 'auto',
    width: '400px'
  });

  dialogRef.afterClosed().subscribe(result => {
  });
}

  openInputWrite(){
    this.newStatus = true;
    this.status = false;
  }
}

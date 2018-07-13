import { Component, OnInit } from '@angular/core';
import {GlobTabsComponent} from '../../components/glob-tabs/glob-tabs.component';
import { WallComponent } from '../../components/wall/wall.component';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  entryComponents: [GlobTabsComponent, WallComponent],
})
export class ProfileComponent implements OnInit {

  public user = {};

  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  ngOnInit() {
    if (!this.authService.isLogged()) {
      this.router.navigate(['/']);
    }

    this.user = JSON.parse(localStorage.getItem('globUser'));

}
}

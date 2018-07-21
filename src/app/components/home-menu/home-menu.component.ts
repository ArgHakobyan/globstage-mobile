import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  public user = {};

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('globUser'));

  }
  ogOut() {
    localStorage.removeItem('auth');
    localStorage.removeItem('globUser');
    this.router.navigate(['']);
  }

}

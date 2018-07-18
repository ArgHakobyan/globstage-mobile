import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {

  public user = {};

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('globUser'));

  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = "option1";

  constructor(private router: Router) { }

  ngOnInit() {

  }
  
  logOut() {
    localStorage.removeItem('auth');
    localStorage.removeItem('globUser');
    this.router.navigate(['']);
  }
}

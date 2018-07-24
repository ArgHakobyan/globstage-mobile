import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import {SearchAllComponent} from "../search-all/search-all.component";

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
  openDialogSearch() {
    const dialogRef = this.dialog.open(SearchAllComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logOut() {
    localStorage.removeItem('auth');
    localStorage.removeItem('globUser');
    this.router.navigate(['']);
  }
}

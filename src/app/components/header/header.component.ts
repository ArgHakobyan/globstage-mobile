import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { SearchAllComponent } from '../search-all/search-all.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input()
  public isCollapsed = false;
  public selectedOption = 'En';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public translate: TranslateService,
  ) {

  }

  ngOnInit() {

  }
  openDialogSearch() {
    const dialogRef = this.dialog.open(SearchAllComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logOut() {
    localStorage.removeItem('GLOBE_AUTH');
    localStorage.removeItem('GLOBE_USER');
    this.router.navigate(['']);
  }
  onChatTitleClicked(event: any): void {
    this.isCollapsed = !this.isCollapsed;
  }

  changeLang(e) {
    this.selectedOption = e.value;
    this.translate.use(e.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewGroupModalComponent } from '../../components/new-group-modal/new-group-modal.component';



@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  entryComponents: [
    NewGroupModalComponent],
})
export class GroupComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogGroup() {
    const dialogRef = this.dialog.open(NewGroupModalComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

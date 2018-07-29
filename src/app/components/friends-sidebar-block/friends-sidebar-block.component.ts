import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friends-sidebar-block',
  templateUrl: './friends-sidebar-block.component.html',
  styleUrls: ['./friends-sidebar-block.component.scss']
})
export class FriendsSidebarBlockComponent implements OnInit {

  @Input() friends;
  friendsOnline: any[];

  constructor() { }

  ngOnInit() {
  }

}

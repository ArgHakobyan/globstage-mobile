import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  @Input() attachments;
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

}

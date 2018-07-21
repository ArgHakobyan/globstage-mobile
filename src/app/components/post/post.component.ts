import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  public activeClass;
  @Input() post;
  constructor() { }

  ngOnInit() {
  }

  focusFunction() {
    this.activeClass = 'focus';
  }
  focusOutFunction() {
    this.activeClass = '';
  }

}

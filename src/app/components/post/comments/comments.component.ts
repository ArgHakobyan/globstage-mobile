import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() post;
  public activeClass;
  constructor() { }

  ngOnInit() {
  }
  focusFunction() {
    this.activeClass = 'focus';
  }
  focusOutFunction() {
    this.activeClass = '';
  }
  postComment(id){
    console.log(id);
    
  }
}


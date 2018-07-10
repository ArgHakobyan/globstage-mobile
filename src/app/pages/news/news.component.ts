import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public smileClass = '';

  constructor() { }

  ngOnInit() {
  }

  smileFocusFunction(){
    this.smileClass = 'focusSmile';
  }
  smileFocusOutFunction(){
    this.smileClass = '';
  }
}

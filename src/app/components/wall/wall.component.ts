import { Component, OnInit } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {
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

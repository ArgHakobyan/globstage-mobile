import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import {HttpService} from '../../services/http.service';

import { PostsService } from '../../services/posts.service';




@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],

})
export class WallComponent implements OnInit {

  wallPosts = [];
  constructor(

    private http: HttpService,
    private postsService: PostsService
  ) {

    }

  ngOnInit() {
   this.postsService.getWallPosts(JSON.parse(localStorage.getItem('globUser')).id).subscribe(
     posts => {
       this.wallPosts = posts.body;
     }
   );
  }
}

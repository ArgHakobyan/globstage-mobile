import { Component, OnInit, Input } from '@angular/core';
import {  HttpService} from '../../services/http.service';
import { PostsService } from '../../services/posts.service';
import { getFromLocalStorage } from '../../utils/local-storage';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],

})
export class WallComponent implements OnInit {
  wallPosts = [];
  @Input() wallId;
  constructor(

    private http: HttpService,
    private postsService: PostsService
  ) {

    }

  ngOnInit() {
    this.updateWall();
  }

  updateWall() {
    this.postsService.getWallPosts(this.wallId).subscribe(
      posts => {
        this.wallPosts = posts.body;
        console.log(this.wallPosts);
      }
    );
  }
}

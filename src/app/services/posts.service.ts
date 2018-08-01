import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from './http.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { appConfig } from '../app.config';

@Injectable()
export class PostsService {
  constructor(
    private router: Router,
    private http: HttpService,
  ) {
  }
  getWallPosts(id) {
    return this.http.get(`/posts/wall/${id}`);
  }

  getVideosPosts(id) {
    //return this.http.get(`/posts/wall/${id}`);
    return this.http.get(`/posts?filter[posttype]=video&filter[post_user_id]=${id}`)
  }

  getAudiosPosts(id) {
    return this.http.get(`/posts?filter[posttype]=audio&filter[post_user_id]=${id}`)
  }

  createWallPost(post) {
    return this.http.post('/posts', post);
  }
}

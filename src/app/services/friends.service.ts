import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { appConfig } from '../app.config';

@Injectable()
export class FriendsService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }
  addFriend(id) {
    return this.http.post(`${appConfig.apiUrl}/friends`, {friend_id: id});
  }

  unfollowFriend(post) {
    return this.http.post('${appConfig}/posts', post);
  }
}

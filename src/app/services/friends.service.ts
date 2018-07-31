import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { appConfig } from '../app.config';
import {getFromLocalStorage} from "../utils/local-storage";

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
  getFriends(){
    return this.http.get(`${appConfig.apiUrl}/friends/myfriends`);
  }
  getFriendRequests(){
    return this.http.get(`${appConfig.apiUrl}/friends?filter[subscription]=0&filter[friend_id]=${getFromLocalStorage('GLOBE_USER').id}`);
  }

  confirmFriend(body){
    return this.http.post(`${appConfig.apiUrl}/friends/confirm`, body);
  }
  unConfirmFriend(body){
    return this.http.post(`{appConfig.apiUrl}/friends/unconfirm`, body);
  }

  }

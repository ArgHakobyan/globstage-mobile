import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpService} from './http.service';

@Injectable()
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor(private httpService: HttpService) {
  }

  get userAsync() {
    const a = localStorage.getItem('globUser') ? JSON.parse(localStorage.getItem('globUser')) : this.user.getValue();

    this.setUser(a);

    return this.user.asObservable();
  }

  get userReady() {
    return this.user
      .filter(u => !!u)
      .take(1);
  }

  setUser(a) {
    this.user.next(a);
    localStorage.removeItem('globUser');
    if (!!JSON.stringify(this.user.getValue())) {
      localStorage.setItem('globUser', JSON.stringify(this.user.getValue()));
    }
  }

  getUser(id) {
    return  this.httpService.get(`/users/${id}`);
  }
  updateUserInfo(info) {
    return  this.httpService.put('/users', info);
  }
  updateUserContact(contact) {
    return  this.httpService.put('/users/updatecontact', contact);
  }
  updateUserPersonal(personal) {
    return  this.httpService.put('/users/updatepersonalinfo', personal);
  }
  // createUserWall(wall) {
  //   return  this.httpService.post('/posts', wall);
  // }


}

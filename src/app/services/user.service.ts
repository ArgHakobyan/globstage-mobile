import {Injectable} from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import {  filter, take } from 'rxjs/operators';
import {getFromLocalStorage, setToLocalStorage} from '../utils/local-storage';


@Injectable()
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {
  }

  get userAsync() {
    const a = getFromLocalStorage('GLOBE_USER') ? getFromLocalStorage('GLOBE_USER') : this.user.getValue();

    this.setUser(a);

    return this.user.asObservable();
  }

  get userReady() {
    return this.user.pipe(
      filter(u => !!u),
      take(1));
  }

  setUser(a) {
    this.user.next(a);
    localStorage.removeItem('GLOBE_USER');
    if (!!JSON.stringify(this.user.getValue())) {
        setToLocalStorage('GLOBE_USER', this.user.getValue());
    }
  }

  getUser(id) {
    return  this.http.get(`/users/${id}`);
  }
  updateUserInfo(info) {
    return  this.http.put('/users', info);
  }
  updateUserContact(contact) {
    return  this.http.put('/users/updatecontact', contact);
  }
  updateUserPersonal(personal) {
    return  this.http.put('/users/updatepersonalinfo', personal);
  }

}

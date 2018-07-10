import {Injectable} from '@angular/core';

import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  user = new BehaviorSubject<any>(null);

  constructor() {
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
}

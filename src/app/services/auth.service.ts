import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HttpService } from './http.service';

import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { SafeSubscribe } from '../helpers/safe-subsripe/safe-subscripe';
import { UserService } from './user.service';
import { appConfig } from '../app.config';

@Injectable()
export class AuthService extends SafeSubscribe {

  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;


  constructor(
    private userService: UserService,
    private httpService: HttpService,
    private http: HttpClient,
  ) {
    super();
  }

  signInUser(email: string, password: string): Observable<any> {
    return this.http.post(this.urlOnlyForOauth, {
      username: email,
      password: password,
      grant_type: 'password',
      client_id: 'front'
    });
  }

  recoveryPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/send-link-reset-password`, {
      email: email,
    });
  }

  newPassword(password: string, key: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/change-password-by-link`, {
      password: password,
      key: key
    });
  }

  signUpUser(user): Observable<any> {
    return this.httpService.post('/user-register', user);
  }

  addData(url: string, body): Observable<any> {
    return this.http.post('/' + url, body);
  }

  signOutUser(): Observable<any> {
    const body = {
      // token: 'c49093d705bf107b406194c5d825e7e758eccce3',
      // token_type_hint: 'access_token'
    };

    return this.http.post(`${this.urlOnlyForOauth}/revoke`, body);
  }

  getUser(email) {
    return Observable.create(observer => {
      this.httpService.get(`/users?filter[0][type]=eq&filter[0][field]=email&filter[0][value]=${email}`)
        .safeSubscribe(this, (res: any) => {
          const user = res && res.body && res.body._embedded && res.body._embedded.user && res.body._embedded.user[0];

          if (user) {
            this.userService.setUser(user);

            observer.next(true);
            observer.complete();
          } else {
            observer.error();
          }
        });
    });
  }

  isLogged() {
    return localStorage.getItem('auth');
  }
}

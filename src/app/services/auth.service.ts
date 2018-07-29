import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { appConfig } from '../app.config';
import {getFromLocalStorage, setToLocalStorage, removeFromLocalStorage} from '../utils/local-storage';

@Injectable()
export class AuthService {

  urlOnlyForOauth = appConfig.apiOauth;
  apiUrl = appConfig.apiUrl;

  constructor(
    private userService: UserService,
    private http: HttpClient,
  ) {

  }

  signInUser(email: string, password: string): Observable<any> {
    return this.http.post(this.urlOnlyForOauth, {
      user_name: email,
      user_password: password
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
    return this.http.post(`${this.apiUrl}/users`, user);
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

  isLogged() {
    const auth: any = getFromLocalStorage('GLOBE_AUTH');
    if (auth && auth.expired > new Date().valueOf() / 1000) {
      return true;
    }
    removeFromLocalStorage(['GLOBE_AUTH', 'GLOBE_USER']);
    return false;
  }
}

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {appConfig} from '../app.config';

@Injectable()
export class CommentService {
  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
  }

  postComment(comment){
    return this.http.post(`${appConfig.apiUrl}/comments`, comment);
  }
  deleteComment(id){
    return this.http.delete(`${appConfig.apiUrl}/comments/${id}`);
  }

}

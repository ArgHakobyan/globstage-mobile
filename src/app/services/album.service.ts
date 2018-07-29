import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { appConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private http: HttpClient
  ) { }

  createAlbum(album) {
    return this.http.post(`${appConfig.apiUrl}/albums`, album);
  }
}

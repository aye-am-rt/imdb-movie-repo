import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, RootObject } from './config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService1Service {

  private _url : string="http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6cd619fc2a08c595da7652598fc028ff&artist=Cher&album=Believe&format=json";

  constructor(private http: HttpClient) { }

  GetAllData(): Observable<RootObject[]>{
    return this.http.get<RootObject[]>(this._url);
  }
}

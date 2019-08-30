import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService1Service {

  public value : string="{{start.value}}";


  private _artistApi : string="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=5&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";

  private _contryTop : string="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&limit=5&country=india&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";

  private _contryTopTracks : string="http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&limit=5&country=india&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
  
  //-------------------------------------up here top links of home 1 component-------------------------

  private _ArtistInfo : string="";

  private _url : string="http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6cd619fc2a08c595da7652598fc028ff&artist=Cher&album=Believe&format=json";
  public _searchApi: string="";

  
  
  
  
  constructor(private http: HttpClient) { }

  artistApi2(): Observable<any>{
    return this.http.get<any>(this._artistApi);
  }
  contryTop(): Observable<any>{
    return this.http.get<any>(this._contryTop);
  }
  contryTopTracks(): Observable<any>{
    return this.http.get<any>(this._contryTopTracks);
  }
//---------------------------up here functions of home 1 component---------------------------------

  
  ArtistInfo(artist): Observable<any>{
    this._ArtistInfo="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artist+"&autocorrect=1&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
    return this.http.get<any>(this._ArtistInfo);
  }
  searchApiService(value){
    this._searchApi="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+value+"&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
  }
  ReturnSearch():Observable<any>{
    return this.http.get<any>(this._searchApi);
  }
}

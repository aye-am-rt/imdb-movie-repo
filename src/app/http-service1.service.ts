import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService1Service {

  public value : string="";//{{start.value}}
  public _searchApi: string="";
  public _ArtistInfo : string="";
  public _FavUrl : string="";
  public obj={id:"",name:"",artist:"",comments:""};

  


  private _artistApi : string="http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=5&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";

  private _contryTop : string="http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&limit=5&country=india&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";

  private _contryTopTracks : string="http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&limit=5&country=india&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
  
  //-------------------------------------up here top links of home 1 component-------------------------
  
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

  searchApiService(value){
    this._searchApi="http://ws.audioscrobbler.com/2.0/?method=track.search&track="+value+"&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
  }
  ReturnSearch():Observable<any>{
    return this.http.get<any>(this._searchApi);
  }
//--------------------------up here functions used for searching from home1 component---------------
  
ArtistInfoService(artist){
  this._ArtistInfo="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+artist+"&autocorrect=1&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
}
ReturnArtistDetails(): Observable<any>{
  return this.http.get<any>(this._ArtistInfo);
}

ShowFavouritsService(artist_name){
  //this._FavUrl="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist="+name+"&autocorrect=1&api_key=6cd619fc2a08c595da7652598fc028ff&format=json";
  this.obj.name="";
  this.obj.artist=artist_name;
  this.obj.comments="";
  this.http.post('http://localhost:3000/users',this.obj).toPromise();
  alert("your id="+this.obj.id);
  this._FavUrl="http://localhost:3000/users/"+this.obj.id;
}
ReturnFavouritesPage():Observable<any>{
  return this.http.get<any>(this._FavUrl);
}
//<!-- http://localhost:3000/posts/1 -->
postdataService(id,your_name,artist,comments)  {
  this.obj.id=id;
  this.obj.name=your_name;
  this.obj.artist=artist;
  this.obj.comments=comments;

this.http.post('http://localhost:3000/users',this.obj).toPromise();
alert("your id="+this.obj.id);
}

DeleteEntryService(idval){
  this.http.delete('http://localhost:3000/users/'+idval).subscribe();
  //window.location.reload();
  alert("deleted"); 
}
editCommentService(idv,edcomv){
  alert("id to edit= "+idv+"  comment to edit="+edcomv);
  this.http.patch('http://localhost:3000/users/'+idv,{"comments":edcomv}).subscribe();

}
}


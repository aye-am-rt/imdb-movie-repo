import { Component, OnInit } from '@angular/core';
import { HttpService1Service } from '../http-service1.service';


@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  public fetchedAlbum= [];
  public fetchedartistApi2= [];
  public fetchedcontryTop= [];
  public fetchedcontryTopTracks=[];



  constructor(private _httpServ: HttpService1Service) { }

  ngOnInit() {
    this._httpServ.artistApi2().subscribe((data)=> {
      this.fetchedartistApi2 = data.artists.artist;
      console.log(this.fetchedartistApi2, "CHART TOP TRACKS WORLD !");
    });


    this._httpServ.contryTop().subscribe((data)=> {
      this.fetchedcontryTop = data.topartists.artist;
      console.log(this.fetchedcontryTop, "TOP ARTISTS OF COUNTRY !");
    });


    this._httpServ.contryTopTracks().subscribe((data)=> {
      this.fetchedcontryTopTracks = data.tracks.track;
      console.log(this.fetchedcontryTopTracks, "TOP TRACKS OF COUNTRY !");
    });
  }

  searchApi(value){
     this._httpServ.searchApiService(value);
  }
}

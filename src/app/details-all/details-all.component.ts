import { Component, OnInit } from '@angular/core';
import { HttpService1Service } from '../http-service1.service';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-details-all',
  templateUrl: './details-all.component.html',
  styleUrls: ['./details-all.component.css']
})
export class DetailsAllComponent implements OnInit {
  public fetchedDetails= [];

  constructor(private _httpDetail: HttpService1Service) { }

  ngOnInit() {

    this._httpDetail.ReturnArtistDetails().subscribe((data)=> {
      console.log(data,"ARTIST RESULT OBJECTS");
      this.fetchedDetails.push(data);
      console.log(this.fetchedDetails, "ARTIST DETAILS");
    });
   
  }

  searchApi(value){
    this._httpDetail.searchApiService(value);
 }

  AddToFavs(name){
    this._httpDetail.ShowFavouritsService(name);
  }
}

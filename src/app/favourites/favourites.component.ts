import { Component, OnInit } from '@angular/core';
import { HttpService1Service } from '../http-service1.service';
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import lowdb from "lowdb";



@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  public fetchedFavourites=[];
  public name :string="";
  public artist :string="";
  public comments :string="";


  constructor(private _httpfavorite: HttpService1Service) { }

  ngOnInit() {
     this._httpfavorite.ReturnFavouritesPage().subscribe((data)=> {
      console.log(data,"FAVOURITES RESULT OBJECTS");
      this.fetchedFavourites=data;
      console.log(this.fetchedFavourites, "FAVOURITES PUSHED IN ARRAY");
    });  
  }

  searchApi(value){
    this._httpfavorite.searchApiService(value);
 }

 postdata(id,your_name, artist, comments){
   console.log(id,your_name,artist,comments);
   this._httpfavorite.postdataService(id,your_name,artist,comments);

 }

 deleteEntry(idval){
   this._httpfavorite.DeleteEntryService(idval);
 }
 editComment(idv,edcomv){
  alert("id to edit= "+idv+"  comment to edit="+edcomv); 
  this._httpfavorite.editCommentService(idv,edcomv);
}

 //<!-- http://localhost:3000/posts/1 -->  json-server --watch db.json

}

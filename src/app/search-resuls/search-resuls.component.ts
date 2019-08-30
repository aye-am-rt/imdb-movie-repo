import { Component, OnInit } from '@angular/core';
import { HttpService1Service } from '../http-service1.service';

@Component({
  selector: 'app-search-resuls',
  templateUrl: './search-resuls.component.html',
  styleUrls: ['./search-resuls.component.css']
})
export class SearchResulsComponent implements OnInit {
  public SearchResults=[];

  constructor(private _httpServSearch: HttpService1Service) { }

  ngOnInit() {

    this._httpServSearch.ReturnSearch().subscribe((data)=> {
      console.log(data,"30 search results object");
      this.SearchResults = data.results.trackmatches.track;
      console.log(this.SearchResults, "SEARCH RESULTS");
    });
  }

  searchApi(value){
    this._httpServSearch.searchApiService(value);
 }

}

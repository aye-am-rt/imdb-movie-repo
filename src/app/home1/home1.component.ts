import { Component, OnInit } from '@angular/core';
import { HttpService1Service } from '../http-service1.service';
import { RootObject } from '../config';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  public fetchedData= [];
  public error: any="";

  constructor(private _httpServ: HttpService1Service) { }

  ngOnInit() {
    this._httpServ.GetAllData().subscribe((data)=>(console.log(data),this.fetchedData.push(data),(error: any) => this.error = error));
    
  }

}

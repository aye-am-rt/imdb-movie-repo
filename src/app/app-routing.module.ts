import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { SearchResulsComponent } from './search-resuls/search-resuls.component';


const routes: Routes = [
  {path:'',redirectTo:"home1",pathMatch:'full'},
  {path:'home1',component:Home1Component},
  {path:'search',component:SearchResulsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

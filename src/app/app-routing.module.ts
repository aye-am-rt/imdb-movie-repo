import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { SearchResulsComponent } from './search-resuls/search-resuls.component';
import { DetailsAllComponent } from './details-all/details-all.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {path:'',redirectTo:"home1",pathMatch:'full'},
  {path:'home1',component:Home1Component},
  {path:'search',component:SearchResulsComponent},
  {path:'Details',component:DetailsAllComponent},
  {path:'favourites',component:FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

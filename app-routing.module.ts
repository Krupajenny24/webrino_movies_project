import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
{
  path: 'movies' ,component:MoviesComponent
},
{
  path: 'admin_movies',component:AdminMoviesComponent
}];

//basename("movies","http://localhost:4200");

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  username : "root";
  password : "root";
}

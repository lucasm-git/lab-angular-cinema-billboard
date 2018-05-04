import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';

const routes: Routes = [
  // router.get( "/", ...)
  { path: "", component: MyHomeComponent },

  // Route to a specific movie
  { path: "movie/:blahId", component: MyMovieComponent },


  // Handle all other URLs (MUST BE LAST)
  // { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

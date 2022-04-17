import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { movieRoutes } from './movie.routing';
import { MovieAddModule } from './movie-add/movie-add.module';
import { MovieEditModule } from './movie-edit/movie-edit.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(movieRoutes),
    MovieAddModule,
    MovieEditModule
  ]
})
export class MovieModule { }

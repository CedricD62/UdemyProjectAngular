import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieEditComponent } from './movie-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes=[
  {
    path:'',
    component: MovieEditComponent
  }
]

@NgModule({
  declarations: [MovieEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MovieEditComponent
  ]
})
export class MovieEditModule { }

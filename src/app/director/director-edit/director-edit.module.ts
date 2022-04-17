import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorEditComponent } from './director-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

const routes: Routes=[
  {
    path:'',
    component: DirectorEditComponent
  }
]


@NgModule({
  declarations: [DirectorEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DirectorEditComponent
  ]
})
export class DirectorEditModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorAddComponent } from './director-add.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

const routes: Routes=[
  {
    path:'',
    component: DirectorAddComponent
  }
]

@NgModule({
  declarations: [DirectorAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FormsModule
  ],
  exports:[
    DirectorAddComponent
  ]
})
export class DirectorAddModule { }

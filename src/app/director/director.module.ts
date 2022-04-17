import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { directorRoutes } from './director.routing';
import { DirectorAddModule } from './director-add/director-add.module';
import { DirectorEditModule } from './director-edit/director-edit.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(directorRoutes),
    DirectorAddModule,
    DirectorEditModule
  ]
})
export class DirectorModule { }

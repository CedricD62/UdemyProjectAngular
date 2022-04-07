import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageViewComponent } from './homepage-view.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from '../shared/header/header.component';



@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }

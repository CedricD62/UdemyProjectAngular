import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageViewComponent } from './homepage-view.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MovieHighlightDirective } from '../shared/movie-highlight.directive';



@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    HeaderComponent,
    MovieHighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }

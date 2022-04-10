import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageViewComponent } from './homepage-view.component';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MovieHighlightDirective } from '../shared/movie-highlight.directive';
import { FavoriteDirectorPipe } from '../shared/favorite-director.pipe';
import { MovieComponent } from './list/movie/movie.component';



@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    HeaderComponent,
    MovieHighlightDirective,
    FavoriteDirectorPipe,
    MovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageViewComponent } from './homepage-view.component';
import { ListComponent } from './list/list.component';
import { MovieHighlightDirective } from '../shared/movie-highlight.directive';
import { FavoriteDirectorPipe } from '../shared/favorite-director.pipe';
import { MovieComponent } from './list/movie/movie.component';
import { HeaderModule } from '../shared/header/header.module';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomepageViewComponent,
    ListComponent,
    MovieHighlightDirective,
    FavoriteDirectorPipe,
    MovieComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }

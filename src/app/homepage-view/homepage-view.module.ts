import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageViewComponent } from './homepage-view.component';
import { ListComponent } from './list/list.component';
import { MovieHighlightDirective } from '../shared/movie-highlight.directive';
import { FavoriteDirectorPipe } from '../shared/favorite-director.pipe';
import { MovieComponent } from './list/movie/movie.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomepageViewComponent
  }
]

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
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    HomepageViewComponent
  ]
})
export class HomepageViewModule { }

import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Director } from 'src/app/interfaces/director';
import { Movie } from 'src/app/interfaces/movie';
import { DirectorService } from 'src/app/services/director.service';
import { MergeService } from 'src/app/services/merge.service';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies!: Movie[];
  directors!:Director[];

  constructor(
   private readonly movieService: MovieService,
   private readonly directorService: DirectorService,
   private readonly mergeService: MergeService
  ) { }

  ngOnInit(): void {

    combineLatest([
      this.movieService.getMovies(),
      this.directorService.getDirectors()
    ]).subscribe(([movies,directors]: [Movie[], Director[]]) => {
      this.movies = this.mergeService.findDirectorByMovie(movies,directors);
      this.directors = this.mergeService.findMoviesByDirector(movies,directors);
    });
  }

  deleteMovie(movie: Movie): void {
    this.movieService.deleteMovie(movie.id!).subscribe(()=> {
      console.log('DELETE')
    });
  }

  deleteDirector(directors: Director): void {
    this.directorService.deleteDirector(directors.id!).subscribe(()=> {
      console.log('DELETE')
    });
  }
}

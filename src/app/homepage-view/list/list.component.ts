import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies!: Movie[];

  constructor(
   private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  movieLiked(movie: Movie): void {
    console.log(movie);
  }

}

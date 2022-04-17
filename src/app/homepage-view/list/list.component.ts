import { Component, OnInit } from '@angular/core';
import { Director } from 'src/app/interfaces/director';
import { Movie } from 'src/app/interfaces/movie';
import { DirectorService } from 'src/app/services/director.service';
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
   private readonly directorService: DirectorService
  ) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: Movie[]) => {
      this.movies = movies;
    });
    
    this.directorService.getDirectors().subscribe((directors: Director[]) =>{
      this.directors = directors;
    })
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

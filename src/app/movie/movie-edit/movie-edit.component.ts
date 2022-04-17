import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

  movie!: Movie;
  movieForm!: FormGroup;
  isUpdated!: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService : MovieService
  ) {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>{
        return this.movieService.getMovie(params.get('id')!)
      })
    ).subscribe((movie: Movie) => {
      this.movie = movie;
      this.movieForm = new FormGroup({
        title: new FormControl(movie.title),
        director: new FormControl(movie.director)
      });
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const movie: Movie = {
      id: this.movie.id,
      ...this.movieForm.value
    }
    this.movieService.updateMovie(movie).subscribe(res =>{
      this.isUpdated = true;
    });

  }

}

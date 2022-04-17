import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  title!: string;
  director!:string;
  isCreated = false;

  constructor(
    private readonly movieService: MovieService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{

    const movie: Movie = {
      title : this.title,
      director: this.director
    };
    
    this.movieService.createMovie(movie).subscribe(() =>{
      this.isCreated = true;
      this.title = "";
      this.director = "";
    });
  }


}

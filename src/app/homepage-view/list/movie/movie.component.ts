import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movieModel!: Movie;
  @Output() delete: EventEmitter<Movie>= new EventEmitter();
  movie!: Movie;
  constructor() { }

  ngOnInit(): void {
    this.movie = this.movieModel;
  }

  onClick():void{
    this.delete.emit(this.movie);
  }
}

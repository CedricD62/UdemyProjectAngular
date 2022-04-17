import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('/api/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.httpClient.get<Movie>(`/api/movies/${id}`);
  }

  createMovie(movie: Movie): Observable<Movie>{
    return this.httpClient.post<Movie>('api/movies', movie);
  }

  updateMovie(movie: Movie): Observable<Movie>{
    return this.httpClient.put<Movie>(`/api/movies/${movie.id}`, movie);
  }

  deleteMovie(id:string): Observable<void>{
    return this.httpClient.delete<void>(`/api/movies/${id}`);
  }

}

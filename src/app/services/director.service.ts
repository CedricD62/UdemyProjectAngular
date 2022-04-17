import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Director } from '../interfaces/director';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getDirectors(): Observable<Director[]> {
    return this.httpClient.get<Director[]>('/api/directors');
  }

  getDirector(id: string): Observable<Director> {
    return this.httpClient.get<Director>(`/api/directors/${id}`);
  }

  createDirector(director: Director): Observable<Director>{
    return this.httpClient.post<Director>('api/directors', director);
  }

  updateDirector(director: Director): Observable<Director>{
    return this.httpClient.put<Director>(`/api/directors/${director.id}`, director);
  }

  deleteDirector(id:string): Observable<void>{
    return this.httpClient.delete<void>(`/api/directors/${id}`);
  }
}

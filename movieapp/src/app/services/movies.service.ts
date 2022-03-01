import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 baseUrl:string = 'https://api.themoviedb.org/3';
 apiKey:string ='63c7c3d500d2bb95bc5e33aad82d7b6a';
  constructor(private http : HttpClient) { }

  getMovies(type:string = 'upcoming', count: number = 12){
   return this.http.get<MovieDto>(
     `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}`).pipe(switchMap(res =>{
       return of(res.results.slice(0,count));
     }));
  } 
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }

  getMovies(){
   return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=63c7c3d500d2bb95bc5e33aad82d7b6a')
  }
}

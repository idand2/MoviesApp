import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GlobalConstants } from './constants'; 
import { Movie } from './movie';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  getWeekTrending(): Observable<Movie[]>{
    var weekTrendingURL =GlobalConstants.apiURL + "/trending/movie/week"+ GlobalConstants.apiKey;
    return this.http.get<Movie[]>(weekTrendingURL)

  }
  getTopRated():Observable<Movie[]>{
    var topRatedURL = GlobalConstants.apiURL + "/movie/top_rated"+ GlobalConstants.apiKey;
    return this.http.get<Movie[]>(topRatedURL)
  }
  constructor(
    private http: HttpClient
  ) { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GlobalConstants } from './constants'; 
import { ApiResult, SearchedMovie } from './movie';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  getWeekTrending(): Observable<ApiResult>{
    var weekTrendingURL = GlobalConstants.apiURL + "/trending/movie/week"+ GlobalConstants.apiKey;
    console.log(weekTrendingURL)
    return this.http.get<ApiResult>(weekTrendingURL)

  }
  getPopular(): Observable<ApiResult>{
    var popularURL= GlobalConstants.apiURL + "/movie/popular"+ GlobalConstants.apiKey;
    return this.http.get<ApiResult>(popularURL)
  }
  getTopRated():Observable<ApiResult>{
    var topRatedURL = GlobalConstants.apiURL + "/movie/top_rated"+ GlobalConstants.apiKey;
    return this.http.get<ApiResult>(topRatedURL)
  }
  getImage(img_size: string, poster_path: string): Observable<HTMLImageElement> {
    var imageURL= GlobalConstants.imgQuery + img_size + poster_path;
    return this.http.get<HTMLImageElement>(imageURL)
  }
  constructor(
    private http: HttpClient
  ) { }
}

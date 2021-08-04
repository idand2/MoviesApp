import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../constants';
import { TmdbApiService } from '../imdb-api.service';
import { SearchedMovie } from '../movie';



@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trendingMovies: SearchedMovie[] = [];

  constructor(private apiService: TmdbApiService) { }

  ngOnInit(): void {
    this.getTrending();
    
  }

  getTrending(): void {
    this.apiService.getWeekTrending()
      .subscribe(trending => this.trendingMovies = trending.results.slice(0,5));
  }

}


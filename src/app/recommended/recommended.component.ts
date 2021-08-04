import { Component, OnInit } from '@angular/core';
import { SearchedMovie } from '../movie';
import { TmdbApiService } from '../imdb-api.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  recommendedMovies: SearchedMovie[] = [];
  constructor(private apiService: TmdbApiService ) { }

  ngOnInit(): void {
    this.getRecommended()
  }

  getRecommended(): void {
  this.apiService.getPopular()
    .subscribe(recommended => this.recommendedMovies = recommended.results.slice(0,5));
}
}

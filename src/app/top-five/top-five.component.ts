import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../imdb-api.service';
import { SearchedMovie } from '../movie';

@Component({
  selector: 'app-top-five',
  templateUrl: './top-five.component.html',
  styleUrls: ['./top-five.component.css']
})
export class TopFiveComponent implements OnInit {
  topFiveMovies : SearchedMovie[]= []
  constructor(private apiService: TmdbApiService) { }

  ngOnInit(): void {
    this.getTopFive()
  }
  getTopFive(): void{
    this.apiService.getTopRated()
      .subscribe(topFive => this.topFiveMovies = topFive.results.slice(0,5))
  }
}

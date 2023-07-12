import { Component, OnInit } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { Movies } from 'src/app/models/movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title1 = 'Top Rated Series';
  title2 = 'Trending Series';
  trendingSeries: ISeries[] = [];
  topRatedSeries: ISeries[] = [];
  movies = Movies;

  ngOnInit(): void {
    this.getTrendingSeries();
    // this.getTopRatedSeries();
  }

  getTrendingSeries() {
    this.trendingSeries = this.movies.map((movie) => {
      return {
        id: 'huy',
        name: movie.name,
        producer: 'huy',
        pictureUrl: movie.titleImage,
        trailerUrl: 'huy',
        releaseDate: movie.year,
        description: movie.desc,
        isCompleted: true,
        categories: [],
        actors: [],
        show: true,
        image: movie.image,
        rating: movie.rate,
      };
    });
  }
}

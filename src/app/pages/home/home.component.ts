import { Component, OnInit } from '@angular/core';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
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

  images: string[] = [
    'https://fr.web.img5.acsta.net/pictures/15/09/03/10/45/420630.jpg',
    'https://fr.web.img6.acsta.net/pictures/23/01/03/14/10/3354701.jpg',
    'https://fr.web.img6.acsta.net/pictures/22/08/29/18/20/3648785.jpg',
    'https://fr.web.img2.acsta.net/pictures/23/01/12/12/36/0727474.jpg',
    'https://fr.web.img4.acsta.net/pictures/23/05/17/14/30/0480031.jpg',
    'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
  ];

  randomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  constructor(public trendingsService: TrendingsService) {}

  ngOnInit(): void {
    this.getTrendingSeries();
    this.getTopRatedSeries();
  }

  getTrendingSeries() {
    this.trendingsService.getTrendings().subscribe((series: ISeries[]) => {
      this.trendingSeries = series.map((series) => {
        return { ...series, show: false, pictureUrl: this.randomImage() };
      });
    });
  }

  getTopRatedSeries() {
    this.topRatedSeries = this.movies.map((movie) => {
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

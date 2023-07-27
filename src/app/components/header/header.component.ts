import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router, public trendingService: TrendingsService) {}

  seriesTrending: ISeries[] = [];

  ngOnInit(): void {
    this.trendingService.getTrendings().subscribe((data) => {
      this.seriesTrending = data.map((serie) => {
        serie.releaseDate = new Date(serie.releaseDate).getFullYear().toString();
        return serie;
      });
    });
  }
  getReleaseYear(date: string) {
    return new Date(date).getFullYear();
  }

  options = {
    type: 'loop',
    direction: 'ttb',
    height: '80vh',
    pauseOnHover: true,
    perPage: 1,
    arrows: false,
    pagination: true,
    keyboard: false,
    autoplay: true,
    interval: 6000,
    breakpoints: {
      640: {
        height: '60vh',
      },
    },
  };
}

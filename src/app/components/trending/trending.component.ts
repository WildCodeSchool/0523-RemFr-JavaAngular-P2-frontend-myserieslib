import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { ICategories, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  trendingSeries: ISeries[] = [];
  categories: ICategories[] = [];
  seriesByCategory: { [category: string]: ISeries[] } = {};

  constructor(private trendingService: TrendingsService, private router: Router) {}

  ngOnInit(): void {
    this.getTrendingSeries();
  }

  getTrendingSeries(): void {
    this.trendingService.getTrendings().subscribe((trend: ISeries[]) => {
      this.trendingSeries = trend;
    });
  }

  redirectToDetail(serie: ISeries) {
    this.router.navigate(['/detail', serie.id]);
  }

  options = {
    type: 'loop',
    gap: '2rem',
    perPage: 5,
    keyboard: false,
    padding: '5rem',
    breakpoints: {
      640: {
        perPage: 2,
        padding: '2rem',
        gap: '1rem',
      },
    },
  };
}

import { Component, OnInit } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  DashboardData = [
    {
      bg: 'bg-[#fe5388]',
      icon: 'movie_filter',
      title: 'Total Series',
      total: 90,
    },
    {
      bg: 'bg-blue-700',
      icon: 'library_books',
      title: 'Total Categories',
      total: 8,
    },
    {
      bg: 'bg-green-600',
      icon: 'supervisor_account',
      title: 'Total Users',
      total: 134,
    },
  ];

  seriesTrending: ISeries[] = [];

  constructor(public trendingService: TrendingsService) {}

  ngOnInit(): void {
    this.trendingService.getTrendings().subscribe((data) => {
      this.seriesTrending = data.map((serie) => {
        serie.releaseDate = new Date(serie.releaseDate).getFullYear().toString();
        return serie;
      });
    });
  }
}

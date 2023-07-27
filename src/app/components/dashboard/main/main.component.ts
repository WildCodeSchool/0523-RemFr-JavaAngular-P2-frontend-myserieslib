import { Component, OnInit } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { UserService } from 'src/app/services/user/user.service';

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

  constructor(
    public trendingService: TrendingsService,
    public seriesService: SeriesService,
    public categoriesService: CategoriesService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.trendingService.getTrendings().subscribe((data) => {
      this.seriesTrending = data.map((serie) => {
        serie.releaseDate = new Date(serie.releaseDate).getFullYear().toString();
        return serie;
      });
    });
    this.seriesService.getSeries().subscribe((series: ISeries[]) => {
      this.DashboardData[0].total = series.length;
    });
    this.categoriesService.getCategories().subscribe((categories) => {
      this.DashboardData[1].total = categories.length;
    });
    this.userService.getUser().subscribe((users) => {
      this.DashboardData[2].total = users.length;
    });
  }
}

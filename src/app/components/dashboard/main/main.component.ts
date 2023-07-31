import { Component, OnInit } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';
import { TrendingsService } from 'src/app/services/trendings/trendings.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { UserService } from 'src/app/services/user/user.service';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { EpisodesService } from 'src/app/services/episodes/episodes.service';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';

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
      title: 'Total Séries',
      total: 90,
    },
    {
      bg: 'bg-blue-700',
      icon: 'library_books',
      title: 'Total Catégories',
      total: 8,
    },
    {
      bg: 'bg-green-600',
      icon: 'supervisor_account',
      title: 'Total Utilisateurs',
      total: 134,
    },
    {
      bg: 'bg-[#fe5388]',
      icon: 'movie_filter',
      title: 'Total épisodes',
      total: 90,
    },
    {
      bg: 'bg-yellow-500',
      icon: 'recent_actors',
      title: 'Total Actors',
      total: 20,
    },
    {
      bg: 'bg-blue-700',
      icon: 'notes',
      title: 'Total Commentaires',
      total: 8,
    },
  ];

  seriesTrending: ISeries[] = [];

  constructor(
    public trendingService: TrendingsService,
    public seriesService: SeriesService,
    public categoriesService: CategoriesService,
    public userService: UserService,
    public actorsService: ActorsService,
    public episodesService: EpisodesService,
    public librariesService: LibrariesService
  ) {}

  ngOnInit(): void {
    this.trendingService.getTrendings().subscribe((data) => {
      this.seriesTrending = data.map((serie) => {
        serie.releaseDate = new Date(serie.releaseDate).getFullYear().toString();
        this.seriesService.getEpisodes(serie.id).subscribe((data) => {
          const numbers = data.map((item) => item.seasonNumber);
          serie.season = Math.max(...numbers);
        });
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
    this.episodesService.getAllEpisodes().subscribe((episodes) => {
      this.DashboardData[3].total = episodes.length;
    });
    this.actorsService.getActors().subscribe((actors) => {
      this.DashboardData[4].total = actors.length;
    });
    this.librariesService.getCommentsWithLimit(0, 100000).subscribe((comments) => {
      this.DashboardData[5].total = comments.length;
    });
  }
}

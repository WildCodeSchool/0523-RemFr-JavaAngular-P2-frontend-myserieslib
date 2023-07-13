import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
import { IEpisode } from 'src/app/utils/interface';

@Component({
  selector: 'app-detail-episodes',
  templateUrl: './detail-episodes.component.html',
  styleUrls: ['./detail-episodes.component.scss'],
})
export class DetailEpisodesComponent implements OnInit {
  @Input()
  id!: string;

  episodes: IEpisode[] = [];
  seasons: number[] | undefined;
  selectedSeason: number | null = null;

  images: string[] = [
    'https://fr.web.img5.acsta.net/pictures/15/09/03/10/45/420630.jpg',
    'https://fr.web.img6.acsta.net/pictures/23/01/03/14/10/3354701.jpg',
    'https://fr.web.img6.acsta.net/pictures/22/08/29/18/20/3648785.jpg',
    'https://fr.web.img2.acsta.net/pictures/23/01/12/12/36/0727474.jpg',
    'https://fr.web.img4.acsta.net/pictures/23/05/17/14/30/0480031.jpg',
    'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    'https://fr.web.img6.acsta.net/pictures/21/11/02/11/12/2878509.jpg',
    'https://fr.web.img3.acsta.net/pictures/22/06/07/11/57/5231272.jpg',
    'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
    'https://fr.web.img6.acsta.net/pictures/23/05/24/11/22/4785740.jpg',
    'https://fr.web.img4.acsta.net/pictures/15/11/10/13/35/055302.jpg',
    'https://fr.web.img3.acsta.net/pictures/20/12/04/10/04/4859166.jpg',
    'https://fr.web.img6.acsta.net/pictures/15/07/29/14/33/086520.jpg',
  ];

  constructor(public serieService: SeriesService) {}

  randomImage() {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }

  ngOnInit(): void {
    this.serieService.getEpisodes(this.id).subscribe((data) => {
      this.episodes = data.map((item: IEpisode) => {
        return { ...item, image: this.randomImage() };
      });
      this.episodes.sort((a: IEpisode, b: IEpisode) => {
        if (a.seasonNumber === b.seasonNumber) {
          return a.episodeNumber - b.episodeNumber;
        } else {
          return a.seasonNumber - b.seasonNumber;
        }
      });
      const numbers = data.map((item: IEpisode) => item.seasonNumber);
      this.seasons = Array.from(new Set<number>(numbers)).sort();
    });
    this.selectedSeason = 1;
  }

  seasonSelect(season: number) {
    this.selectedSeason = season;
  }

  getFilteredEpisodes() {
    if (this.selectedSeason) {
      return this.episodes.filter((episode: IEpisode) => episode.seasonNumber == this.selectedSeason);
    } else {
      return this.episodes;
    }
  }
}

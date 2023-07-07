import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series/series.service';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  series: ISeries[] = [];

  constructor(public serieService: SeriesService) {}

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

  getSeries(props: any) {
    const { search, filter, categories } = props;
    this.serieService.getSeries(search, filter, categories).subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        return { ...series, show: false, image: this.randomImage() };
      });
    });
  }

  ngOnInit(): void {
    this.serieService.getSeries().subscribe((series: ISeries[]) => {
      this.series = series.map((series) => {
        return { ...series, show: false, image: this.randomImage() };
      });
    });
  }
}

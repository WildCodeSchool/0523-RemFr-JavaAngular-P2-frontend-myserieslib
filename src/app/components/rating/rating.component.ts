import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnChanges {
  @Input() rating = 0;

  ratings: string[] = [];

  getStars() {
    this.ratings = [];
    const stars = Math.round(this.rating);
    if (stars % 2 === 0) {
      for (let i = 0; i < stars / 2; i++) {
        this.ratings.push('full');
      }
    } else if (stars % 2 !== 0) {
      for (let i = 0; i < stars / 2 - 1; i++) {
        this.ratings.push('full');
        if (i + 0.5 === stars / 2 - 1) {
          this.ratings.push('half');
        }
      }
    }
    while (this.ratings.length < 5) {
      this.ratings.push('empty');
    }
  }

  ngOnChanges() {
    this.getStars();
  }
}

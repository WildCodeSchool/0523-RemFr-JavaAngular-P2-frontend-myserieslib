import { Component, Input, OnInit } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';

@Component({
  selector: 'app-star-score',
  templateUrl: './star-score.component.html',
  styleUrls: ['./star-score.component.scss'],
})
export class StarScoreComponent implements OnInit {
  @Input() scoreUSer!: number;
  @Input() serieId!: string;

  emptyLeft = '../../../assets/icons/empty-star_left.png';
  emptyRight = '../../../assets/icons/empty-star_right.png';
  fullLeft = '../../../assets/icons/fullstar_left.png';
  fullRight = '../../../assets/icons/fullstar_right.png';

  totalScore: number | undefined;

  mouseOver = false;

  stars = [
    { value: 0.5, type: 'left_star', urlStar: this.emptyLeft, clickUrl: this.emptyLeft },
    { value: 1, type: 'right_star', urlStar: this.emptyRight, clickUrl: this.emptyRight },
    { value: 1.5, type: 'left_star', urlStar: this.emptyLeft, clickUrl: this.emptyLeft },
    { value: 2, type: 'right_star', urlStar: this.emptyRight, clickUrl: this.emptyRight },
    { value: 2.5, type: 'left_star', urlStar: this.emptyLeft, clickUrl: this.emptyLeft },
    { value: 3, type: 'right_star', urlStar: this.emptyRight, clickUrl: this.emptyRight },
    { value: 3.5, type: 'left_star', urlStar: this.emptyLeft, clickUrl: this.emptyLeft },
    { value: 4, type: 'right_star', urlStar: this.emptyRight, clickUrl: this.emptyRight },
    { value: 4.5, type: 'left_star', urlStar: this.emptyLeft, clickUrl: this.emptyLeft },
    { value: 5, type: 'right_star', urlStar: this.emptyRight, clickUrl: this.emptyRight },
  ];

  constructor(private librariesService: LibrariesService) {}

  ngOnInit(): void {
    if (this.scoreUSer) {
      const newValue = Math.round(this.scoreUSer) / 2;
      this.stars.forEach((star, index) => {
        if (star.value <= newValue) {
          if (index % 2 === 0) {
            star.urlStar = this.fullLeft;
            star.clickUrl = this.fullLeft;
          } else {
            star.urlStar = this.fullRight;
            star.clickUrl = this.fullRight;
          }
        }
      });
    }
  }

  getIndex(i: number) {
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      if (i % 2 === 0) {
        star.urlStar = this.emptyLeft;
        star.clickUrl = this.emptyLeft;
      } else {
        star.urlStar = this.emptyRight;
        star.clickUrl = this.emptyRight;
      }
    }
    this.stars.slice(0, i + 1).map((_, index) => {
      const star = this.stars[index];
      if (index % 2 === 0) {
        star.urlStar = this.fullLeft;
        star.clickUrl = this.fullLeft;
      } else {
        star.urlStar = this.fullRight;
        star.clickUrl = this.fullRight;
      }
      this.totalScore = star.value * 2;
    });
    if (this.totalScore) {
      this.librariesService.updateScore(this.serieId, this.totalScore).subscribe();
    }
  }

  hoverIndex(i: number) {
    this.mouseOver = true;
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      if (i % 2 === 0) {
        star.urlStar = this.emptyLeft;
      } else {
        star.urlStar = this.emptyRight;
      }
    }
    this.stars.slice(0, i + 1).map((_, index) => {
      const star = this.stars[index];
      if (index % 2 === 0) {
        star.urlStar = this.fullLeft;
      } else {
        star.urlStar = this.fullRight;
      }
    });
  }

  leaveIndex() {
    this.mouseOver = false;
    if (!this.mouseOver) {
      this.restoreStars();
    }
  }

  restoreStars() {
    for (let i = 0; i < this.stars.length; i++) {
      const star = this.stars[i];
      star.urlStar = star.clickUrl;
    }
  }
}

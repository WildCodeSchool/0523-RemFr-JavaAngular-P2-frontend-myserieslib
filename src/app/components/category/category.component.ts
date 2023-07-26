import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { SeriesService } from 'src/app/services/series/series.service';
import { ICategories, ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() categories: ICategories[] = [];
  @Input() seriesByCategory: { [category: string]: ISeries[] } = {};

  constructor(private categoryService: CategoriesService, private seriesService: SeriesService, private router: Router){}
  ngOnInit(): void {
    this.getCategoriesWithSeries();
  }

  getCategoriesWithSeries(): void {
    this.categoryService.getCategoriesWithSeries().subscribe((categories: ICategories[]) => {
        categories = categories.filter(category => category.series && category.series.length > 0); // Filtering out categories with no series.
        this.categories = categories;
        categories.forEach((category) => {
          if (category.series && category.series.length > 0) { // Add this check
            this.seriesByCategory[category.name] = category.series;
          }
        });
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

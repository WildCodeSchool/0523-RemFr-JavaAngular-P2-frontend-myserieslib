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
    this.getCategories();
    this.getSeriesByCategory();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe((categories: ICategories[]) => {
        this.categories.unshift({ id: '0', name: 'Toutes catégories', series: [] });
        this.categories = categories;
    });
  }
  
  getSeriesByCategory(): void {
    const limit = 10;
    this.categoryService.getCategories().subscribe((categories: ICategories[]) => {
      categories.forEach((category) => {
        this.seriesService.getTopSeriesByCategory(category.id, limit).subscribe((series: ISeries[]) => {
          this.seriesByCategory[category.name] = series;
        });
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

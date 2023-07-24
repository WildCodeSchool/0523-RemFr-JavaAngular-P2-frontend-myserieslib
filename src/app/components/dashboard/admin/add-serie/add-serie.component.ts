import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/utils/interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss'],
})
export class AddSerieComponent implements OnInit {
  selectedStatus = 'Returning';
  categories: ICategories[] = [];

  teamData = [
    {
      name: 'Ludivine S.',
      image: '/assets/avatars/ava-13.png',
    },
    {
      name: 'Marvin G.',
      image: '/assets/avatars/ava-14.png',
    },
    {
      name: 'Matthieu',
      image: '/assets/avatars/ava-3.png',
    },
    {
      name: 'Huy',
      image: '/assets/avatars/ava-8.png',
    },
  ];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IActors, ICategories } from 'src/app/utils/interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss'],
})
export class AddSerieComponent implements OnInit {
  selectedStatus = 'Returning';
  categories: ICategories[] = [];
  actors: IActors[] = [];
  addSerieForm: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private actorService: ActorsService,
    private serieService: SeriesService
  ) {
    this.addSerieForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      pictureUrlXL: ['', Validators.required],
      pictureUrlXS: ['', Validators.required],
      producer: ['', Validators.required],
      actors: ['', Validators.required],
      releaseDate: ['', Validators.required],
      trailerURL: ['', Validators.required],
      isCompleted: [false, Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.actorService.getActors().subscribe((actors) => {
      this.actors = actors;
    });
  }

  onSubmit(): void {
    this.serieService.createSeries(this.addSerieForm.value);
  }
}

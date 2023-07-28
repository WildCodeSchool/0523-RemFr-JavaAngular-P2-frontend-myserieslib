import { Component, OnInit } from '@angular/core';
import { IActors, ICategories } from 'src/app/utils/interface';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorsService } from 'src/app/services/actors/actors.service';
import { SeriesService } from 'src/app/services/series/series.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
  styleUrls: ['./add-serie.component.scss'],
})
export class AddSerieComponent implements OnInit {
  selectedStatus = 'En cours';
  categories: ICategories[] = [];
  actors: IActors[] = [];
  addSerieForm: FormGroup;
  title = 'Créer une série';

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

  compareCategories(category1: ICategories, category2: ICategories): boolean {
    return category1 && category2 ? category1.id === category2.id : category1 === category2;
  }

  compareActors(actor1: IActors, actor2: IActors): boolean {
    return actor1 && actor2 ? actor1.id === actor2.id : actor1 === actor2;
  }

  id = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.actorService.getActors().subscribe((actors) => {
      this.actors = actors;
    });
    if (this.id) {
      this.title = 'éditer une série';
      this.serieService.getSerieById(this.id).subscribe((serie) => {
        this.addSerieForm.setValue({
          name: serie.name,
          description: serie.description,
          pictureUrlXL: serie.pictureUrlXL,
          pictureUrlXS: serie.pictureUrlXS,
          producer: serie.producer,
          actors: serie.actors,
          releaseDate: serie.releaseDate,
          trailerURL: serie.trailerURL,
          isCompleted: serie.isCompleted,
          category: serie.categories,
        });
      });
    }
  }

  onSubmit(): void {
    if (!this.id) {
      this.serieService.createSeries(this.addSerieForm.value);
    } else {
      this.serieService.updateSeries(this.id, this.addSerieForm.value);
    }
  }
}

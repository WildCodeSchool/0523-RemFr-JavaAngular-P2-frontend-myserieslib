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
      name: ['Desperate Housewives', Validators.required],
      description: [
        `Le quotidien mouvementé de quatre femmes : Susan Mayer, Lynette Scavo, Bree Van de Kamp et Gabrielle Solis. Elles vivent à Wisteria Lane, une banlieue chic de Fairview, stéréotype des quartiers résidentiels des classes aisées américaines. Mary Alice Young, une amie des héroïnes, se suicide au début de l'épisode pilote, et commente d'outre-tombe la multitude d'intrigues mêlant humour, drame et mystère auxquelles prennent part les quatre femmes.`,
        Validators.required,
      ],
      pictureUrlXL: [
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CC7BA28AD77E83F6DD66BBB0A46ECD8AAE37B0039825973BB460AD57EAAD6122/scale?width=1200&aspectRatio=1.78&format=jpeg',
        Validators.required,
      ],
      pictureUrlXS: ['https://imgsrc.cineserie.com/2004/10/1575842.jpg?ver=1', Validators.required],
      producer: ['Marc Cherry', Validators.required],
      actors: ['', Validators.required],
      releaseDate: ['2004-10-04', Validators.required],
      trailerURL: ['https://www.youtube.com/watch?v=TRQ-Oor0pOE', Validators.required],
      isCompleted: [true, Validators.required],
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
      this.title = 'Éditer une série';
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

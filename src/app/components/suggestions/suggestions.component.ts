import { Component, Input, OnInit } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ICategories, ISeries } from 'src/app/utils/interface';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent {
  
  @Input() frequentCategories: ICategories[] = [];

  constructor(private libraryService: LibrariesService, private router: Router) { }


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

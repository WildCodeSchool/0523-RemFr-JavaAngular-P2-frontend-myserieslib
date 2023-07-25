import { Component, Input, OnInit } from '@angular/core';
import { LibrariesService } from 'src/app/services/libraries/libraries.service';
import { ICategories } from 'src/app/utils/interface';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  
  @Input() frequentCategories: ICategories[] = [];

  constructor(private libraryService: LibrariesService) { }

  ngOnInit(): void {
    // const jwt = localStorage.getItem('jwt');
    // if (jwt) {
    //   const decoded:any = jwt_decode(jwt);
    //   const userId = decoded.userId;
    //   this.libraryService.getSuggestions(userId).subscribe(res => {
    //     this.frequentCategories = res;
    //   });
    // }
  }
    
}

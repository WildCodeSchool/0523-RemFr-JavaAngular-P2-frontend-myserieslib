import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-trailer',
  templateUrl: './btn-trailer.component.html',
  styleUrls: ['./btn-trailer.component.scss'],
})
export class BtnTrailerComponent {
  @Input() id = '';
  constructor(public router: Router) {}

  redirectToDetail(id: string) {
    this.router.navigate(['/detail', id]);
  }
}

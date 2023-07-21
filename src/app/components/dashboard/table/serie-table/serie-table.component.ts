import { Component, Input } from '@angular/core';
import { ISeries } from 'src/app/utils/interface';

@Component({
  selector: 'app-serie-table',
  templateUrl: './serie-table.component.html',
  styleUrls: ['./serie-table.component.scss'],
})
export class SerieTableComponent {
  @Input() series: ISeries[] = [];
}

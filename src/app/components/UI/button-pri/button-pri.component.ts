import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-pri',
  templateUrl: './button-pri.component.html',
  styleUrls: ['./button-pri.component.scss'],
})
export class ButtonPriComponent {
  @Input() text?: string;
}

import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-button-acc',
  templateUrl: './button-acc.component.html',
  styleUrls: ['./button-acc.component.scss'],
})
export class ButtonAccComponent {
  open = false;
  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.open = false;
    }
  }
}

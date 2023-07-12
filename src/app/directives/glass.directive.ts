import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGlass]',
})
export class GlassDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.background = 'rgba(225, 225, 225, 0.1)';
    this.element.nativeElement.style.backdropFilter = 'blur(1rem)';
  }
}

import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGlass]',
})
export class GlassDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.boxShadow = '0 15px 15px rgba(0, 0, 0, 0.3)';
    this.element.nativeElement.style.backdropFilter = 'blur(1rem)';
  }
}

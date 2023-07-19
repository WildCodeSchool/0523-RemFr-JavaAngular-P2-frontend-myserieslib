import { Component, HostListener, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-button-acc',
  templateUrl: './button-acc.component.html',
  styleUrls: ['./button-acc.component.scss'],
})
export class ButtonAccComponent {
  open = false;
  constructor(private elementRef: ElementRef, private store: Store) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.open = false;
    }
  }

  logOut(): void {
    this.store.dispatch({ type: 'USER_LOGOUT' });
  }
}

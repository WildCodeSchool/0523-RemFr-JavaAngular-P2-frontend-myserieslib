import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/services/store/user.reducer';

@Component({
  selector: 'app-button-acc',
  templateUrl: './button-acc.component.html',
  styleUrls: ['./button-acc.component.scss'],
})
export class ButtonAccComponent implements OnInit {
  open = false;
  user: any = {};

  constructor(private elementRef: ElementRef, private store: Store, private router: Router) {}
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.open = false;
    }
  }

  ngOnInit(): void {
    this.store.select(selectUser).subscribe((user) => (this.user = user));
  }

  logOut(): void {
    this.store.dispatch({ type: 'USER_LOGOUT' });
    this.router.navigate(['/login']);
  }
}

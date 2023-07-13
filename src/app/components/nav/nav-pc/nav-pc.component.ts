import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-pc',
  templateUrl: './nav-pc.component.html',
  styleUrls: ['./nav-pc.component.scss'],
})
export class NavPcComponent {
  isActive = false;
  smoothScroll(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

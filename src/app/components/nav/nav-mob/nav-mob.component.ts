import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { ModalService } from 'src/app/services/modal/modal.service';
import { selectUser } from 'src/app/services/store/user.reducer';
@Component({
  selector: 'app-nav-mob',
  templateUrl: './nav-mob.component.html',
  styleUrls: ['./nav-mob.component.scss'],
})
export class NavMobComponent implements OnInit {
  activeTab = 'home';
  isNavbarFixed = false;
  user: any = {};

  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalService: ModalService,
    private store: Store
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbarContainer = this.elementRef.nativeElement.querySelector('#navbar-container');
    const distanceFromTop = navbarContainer.getBoundingClientRect().top;
    this.isNavbarFixed = distanceFromTop < 0;
  }

  ngOnInit(): void {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.activeTab = this.activatedRoute.snapshot.queryParams['activeTab'] || 'home';
    });
    this.store.select(selectUser).subscribe((user) => (this.user = user));
  }

  changeTab(tabName: string): void {
    if (tabName !== this.activeTab) {
      this.activeTab = tabName;
      this.updateActiveTabQueryParam();
    }
  }

  private updateActiveTabQueryParam(): void {
    this.router.navigate([], {
      queryParams: { activeTab: this.activeTab },
      queryParamsHandling: 'merge',
    });
  }

  redirectToLibrary() {
    this.modalService.openModal(() => this.router.navigate(['/library']));
  }
}

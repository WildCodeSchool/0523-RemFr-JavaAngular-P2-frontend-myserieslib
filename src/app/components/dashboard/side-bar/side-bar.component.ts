import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SidebarLink {
  name: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent {
  SideLinks: SidebarLink[] = [
    {
      name: 'Dashboard',
      link: 'main',
      icon: 'dashboard',
    },
    {
      name: 'Series List',
      link: 'serie-list',
      icon: 'movie_filter',
    },
    {
      name: 'Add Serie',
      link: 'add-serie',
      icon: 'library_add',
    },
    {
      name: 'Categories',
      link: 'categories',
      icon: 'library_books',
    },
    {
      name: 'Users',
      link: 'users',
      icon: 'supervisor_account',
    },
  ];

  constructor(private router: Router) {}
  isActive(link: SidebarLink): boolean {
    return this.router.isActive(link.link, true);
  }
}

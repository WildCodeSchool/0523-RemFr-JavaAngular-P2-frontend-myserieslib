import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
      name: 'Liste des séries',
      link: 'serie-list',
      icon: 'movie_filter',
    },
    {
      name: 'Ajouter une série',
      link: 'serie',
      icon: 'library_add',
    },
    {
      name: 'Catégories',
      link: 'categories',
      icon: 'library_books',
    },
    {
      name: 'Actors',
      link: 'actors',
      icon: 'recent_actors',
    },
    {
      name: 'Actors',
      link: 'actors',
      icon: 'recent_actors',
    },
    {
      name: 'Utilisateurs',
      link: 'users',
      icon: 'supervisor_account',
    },
    {
      name: 'Commentaires',
      link: 'comments',
      icon: 'notes',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute) {}

  isActive(link: SidebarLink): boolean {
    return this.activatedRoute.firstChild?.snapshot.url[0].path === link.link;
  }
}

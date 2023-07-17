import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  moments = [
    {
      id: 'huy',
      title: 'Stranger Things',
      img: 'assets/Stranger-things-bg.png',
      des: 'Quand un jeune garçon disparaît, une petite ville découvre une affaire mystérieuse, des expériences secrètes, des forces surnaturelles terrifiantes... et une fillette.',
      episodes: 4,
      category: 'Science-fiction',
      releaseDate: '2016',
    },
    {
      id: 'huy',
      title: 'The Witcher',
      img: 'assets/witcher-bg.jpg',
      des: 'Geralt de Riv, un chasseur de monstres mutant, poursuit son destin dans un monde chaotique où les humains se révèlent souvent plus vicieux que les bêtes.',
      episodes: 3,
      category: 'Fantastique',
      releaseDate: '2019',
    },
  ];

  options = {
    type: 'loop',
    direction: 'ttb',
    height: '80vh',
    pauseOnHover: true,
    perPage: 1,
    arrows: false,
    pagination: true,
    keyboard: false,
    autoplay: true,
    interval: 6000,
    breakpoints: {
      640: {
        height: '60vh',
      },
    },
  };
}

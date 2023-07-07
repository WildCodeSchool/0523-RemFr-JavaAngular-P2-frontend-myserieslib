import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent {
  cards: Card[] = [
    {
      title: 'The Witcher',
      copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains',
      button: 'View Trips',
      url: 'https://fr.web.img6.acsta.net/pictures/19/12/12/12/13/2421997.jpg',
    },
    {
      title: 'Peaky Blinders',
      copy: 'Plan your next beach trip with these fabulous destinations',
      button: 'View Trips',
      url: 'https://fr.web.img3.acsta.net/pictures/22/06/07/11/57/5231272.jpg',
    },
    {
      title: 'Arcane',
      copy: "It's the desert you've always dreamed of",
      button: 'Book Now',
      url: 'https://fr.web.img6.acsta.net/pictures/21/11/02/11/12/2878509.jpg',
    },
    {
      title: 'Black Mirror',
      copy: 'Seriously, straight up, just blast off into outer space today',
      button: 'Book Now',
      url: 'https://fr.web.img6.acsta.net/pictures/23/05/24/11/22/4785740.jpg',
    },
  ];
}

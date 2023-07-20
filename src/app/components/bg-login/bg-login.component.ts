import { Component } from '@angular/core';

@Component({
  selector: 'app-bg-login',
  templateUrl: './bg-login.component.html',
  styleUrls: ['./bg-login.component.scss'],
})
export class BgLoginComponent {
  images: string[] = [
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z1K4mJwISETia59rrnMdXxzoSrZ.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f5ZMzzCvt2IzVDxr54gHPv9jlC9.jpg',
    'https://fr.web.img6.acsta.net/pictures/22/08/29/18/20/3648785.jpg',
    'https://fr.web.img2.acsta.net/pictures/23/01/12/12/36/0727474.jpg',
    'https://fr.web.img4.acsta.net/pictures/23/05/17/14/30/0480031.jpg',
    'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cZ0d3rtvXPVvuiX22sP79K3Hmjz.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wq3vuQzQgbS83zX3malAFWMsSwX.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6PX0r5TRRU5y0jZ70y1OtbLYmoD.jpg',
    'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3xrA0tXuYsLSbQaPvAgsHmQfY3U.jpg',
  ];

  option1 = {
    type: 'loop',
    perPage: 8,
    gap: '.3rem',
    arrows: false,
    pagination: false,
    keyboard: false,
    padding: '1rem',
    autoplay: true,
    interval: 4000,
    speed: 25000,
    breakpoints: {
      640: {
        perPage: 4,
        gap: '.1rem',
      },
    },
  };

  option2 = {
    type: 'loop',
    perPage: 8,
    gap: '.3rem',
    arrows: false,
    pagination: false,
    keyboard: false,
    padding: '1rem',
    autoplay: true,
    interval: 6000,
    speed: 20000,
    breakpoints: {
      640: {
        perPage: 4,
        gap: '.1rem',
      },
    },
  };

  option3 = {
    type: 'loop',
    perPage: 8,
    rewind: true,
    gap: '.3rem',
    arrows: false,
    pagination: false,
    keyboard: false,
    padding: '1rem',
    autoplay: true,
    interval: 8000,
    speed: 30000,
    breakpoints: {
      640: {
        perPage: 4,
        gap: '.1rem',
      },
    },
  };
}

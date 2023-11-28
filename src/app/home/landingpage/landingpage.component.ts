import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  songs: any[] = [
    { name: 'track 1', img: 'assets/images/pexels-vishnu-r-nair-1105666.jpg' },
    {
      name: 'track 2',
      img: '/assets/images/ecd5833d5140944fa0dbc62a940b6b4b.jpeg',
    },
    {
      name: 'track 2',
      img: '/assets/images/music-event.jpg',
    },
  ];
}

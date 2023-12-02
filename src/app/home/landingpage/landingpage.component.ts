import { Component, ElementRef, HostListener } from '@angular/core';

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
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sectionHero = this.el.nativeElement.querySelector(
      'section.hero'
    ) as HTMLElement;

    const scrollPercentage =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    const backgroundColor = `rgba(0, 0, 0, ${scrollPercentage / 120})`;

    sectionHero.style.backgroundColor = backgroundColor;
  }
}

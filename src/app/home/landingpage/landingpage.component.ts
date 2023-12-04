import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SONG, songs } from 'src/app/domain/Song';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss'],
})
export class LandingpageComponent {
  Song: SONG = songs[0];
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

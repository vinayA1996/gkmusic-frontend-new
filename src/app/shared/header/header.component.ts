import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  routeToComponent(component: string) {
    this.router.navigateByUrl(`/${component}`);
  }
  onMusicLinkClick() {
    this.router.navigateByUrl(`/home`);
    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollPosition = 2.1 * screenHeight;

    window.scroll({
      top: scrollPosition,
      behavior: 'smooth',
    });
  }
}

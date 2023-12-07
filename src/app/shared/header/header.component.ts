import { Component, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router, private renderer: Renderer2) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navbarToggler = document.getElementById('navbar-toggler');
        if (navbarToggler && !navbarToggler.classList.contains('collapsed')) {
          // If the navbar is not already collapsed, toggle it
          navbarToggler.click();
        }
      }
    });
  }

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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit{
  private scrollToTop(): void {
    // Use window.scrollTo to scroll the entire window to the top
    window.scrollTo(0, 0);
  }
ngOnInit(): void
  {
    this.scrollToTop();

  }

}

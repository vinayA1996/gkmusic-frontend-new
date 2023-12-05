import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  ngOnInit(): void
  {
    this.scrollToTop();
    
  }
  private scrollToTop(): void {
    // Use window.scrollTo to scroll the entire window to the top
    window.scrollTo(0, 0);
  }

}

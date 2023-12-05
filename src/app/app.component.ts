import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gkmusic';
  constructor(private meta: Meta) {}
  ngOnInit() {
    this.meta.addTag({ name: 'description', content: 'Your page description' });
    // Add other meta tags as needed
  }
}

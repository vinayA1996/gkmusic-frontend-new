import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SONG, songs } from 'src/app/domain/Song';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: string;
  song: SONG;
  songs: SONG[];
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(): void {
    // Retrieve the searchText parameter from the route
    this.route.queryParams.subscribe((params) => {
      const searchText = params['searchText'];
      this.searchText = searchText;
      console.log('Received Search Text:', searchText);

      // Now you can use the searchText in your search component logic
    });
    this.songs = songs;
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
  onClick() {
    this.router.navigate(['/song', 1, 0]);
  }
}

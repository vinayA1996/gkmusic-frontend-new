import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SONG } from 'src/app/domain/Song';
import { SongsService } from 'src/app/service/songs.service';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.scss'],
})
export class SongPageComponent implements OnInit {
  layoutId: string;
  songId: string;
  songs: SONG[];
  song: SONG;
  constructor(
    private route: ActivatedRoute,
    private songService: SongsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.layoutId = this.route.snapshot.paramMap.get('layoutId');
    this.songId = this.route.snapshot.paramMap.get('songId');
    this.songs = this.songService.getSongsFromSongLayout1();
    this.song = this.songs[this.songId];
    console.log(this.song);
    this.scrollToTop();
  }

  private scrollToTop(): void {
    // Use window.scrollTo to scroll the entire window to the top
    window.scrollTo(0, 0);
  }
  goBack(): void {
    this.router.navigate(['/']);
  }
}

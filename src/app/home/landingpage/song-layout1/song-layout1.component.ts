import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbCarousel,
  NgbCarouselConfig,
  NgbSlideEvent,
  NgbSlideEventSource,
} from '@ng-bootstrap/ng-bootstrap';
import { SONG } from 'src/app/domain/Song';

@Component({
  selector: 'app-song-layout1',
  templateUrl: './song-layout1.component.html',
  styleUrls: ['./song-layout1.component.scss'],
})
export class SongLayout1Component implements OnInit {
  backgroundImagePath: string;
  @Input()
  Song: SONG;
  constructor(config: NgbCarouselConfig, private router: Router) {}
  ngOnInit(): void {
    this.backgroundImagePath = this.Song.background;
  }
  onClick() {
    this.router.navigate(['/song', 1, 0]);
  }
}

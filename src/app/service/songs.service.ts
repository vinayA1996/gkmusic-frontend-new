import { Injectable } from '@angular/core';
import { SONG, songs } from '../domain/Song';

@Injectable({
  providedIn: 'root',
})
export class SongsService {
  songLayout1: SONG[];

  constructor() {}

  getSongsFromSongLayout1(): SONG[] {
    this.songLayout1 = songs;
    return this.songLayout1;
  }
}

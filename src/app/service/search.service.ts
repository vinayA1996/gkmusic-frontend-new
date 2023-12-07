import { Injectable } from '@angular/core';
import { SONG, songs } from '../domain/Song';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  getSearchResults(searchText: string): SONG[] {
    if (searchText.toLowerCase().startsWith('imaan')) {
      return songs;
    }
    return null;
  }
}

import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoChangerService {

  whenThumbClicked = new EventEmitter<{title: string, artist : string, description : string}>();
  whenToLoadVideo = new EventEmitter<string>();
  constructor() {}

}

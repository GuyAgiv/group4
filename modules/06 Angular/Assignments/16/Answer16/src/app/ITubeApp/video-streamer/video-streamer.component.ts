import { Component, OnInit } from '@angular/core';
import { VideoChangerService } from '../video-changer.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-streamer',
  templateUrl: './video-streamer.component.html',
  styleUrls: ['./video-streamer.component.css']
})
export class VideoStreamerComponent implements OnInit {

  currentVideoUrl : string;
  constructor(private videoChanger : VideoChangerService, public sanitizer: DomSanitizer) {
    this.currentVideoUrl = '';

    this.videoChanger.whenToLoadVideo.subscribe((url : string) => {
      console.log(url);
      this.currentVideoUrl = url;
    });


  }

  ngOnInit() {
    
  }

}

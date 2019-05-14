import { Component, OnInit } from '@angular/core';
import { VideoChangerService } from '../video-changer.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  currentTitle : string;
  currentArtist : string;
  currentDescription : string;

  constructor(private videoChanger : VideoChangerService) {
   this.currentTitle = "";
    this.currentArtist = "";
    this.currentDescription = "";

    this.videoChanger.whenThumbClicked.subscribe(
      ({title, artist, description}) => {this.currentTitle = title; this.currentArtist = artist; this.currentDescription = description}
    );
  }

  ngOnInit() {
  }

}

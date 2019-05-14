import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FetcherService } from 'src/app/fetcher.service';
import { VideoChangerService } from '../video-changer.service';

@Component({
  selector: 'app-video-thumb',
  templateUrl: './video-thumb.component.html',
  styleUrls: ['./video-thumb.component.css']
})
export class VideoThumbComponent implements OnInit {
  @ViewChild('thumbImg') t : ElementRef;
  @Input('thumbProps') thumbs: {title: string, artist : string , description: string };
  videoSrc : string;

  constructor(private fetcher : FetcherService, private videoChanger : VideoChangerService) { }
  ngOnInit(){
    this.fetcher.fetchPicture(this.t.nativeElement);
    this.fetcher.fetchVideo();
  }

  onImageClicked()
  {
    this.videoChanger.whenThumbClicked.emit(this.thumbs);
    this.videoChanger.whenToLoadVideo.emit(this.videoSrc);
  }

}

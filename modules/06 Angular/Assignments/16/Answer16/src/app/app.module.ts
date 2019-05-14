import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent , SafePipe} from './app.component';
import { GalleryComponent } from './GalleryApp/gallery/gallery.component';
import { ArrowComponent } from './GalleryApp/arrow/arrow.component';
import { ThumbsBarComponent } from './GalleryApp/thumbs-bar/thumbs-bar.component';
import { ItubeComponent } from './ITubeApp/itube/itube.component';
import { MoreVideosComponent } from './ITubeApp/more-videos/more-videos.component';
import { VideoStreamerComponent } from './ITubeApp/video-streamer/video-streamer.component';
import { VideoDetailsComponent } from './ITubeApp/video-details/video-details.component';
import { VideoThumbComponent } from './ITubeApp/video-thumb/video-thumb.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ArrowComponent,
    ThumbsBarComponent,
    ItubeComponent,
    MoreVideosComponent,
    VideoStreamerComponent,
    VideoDetailsComponent,
    VideoThumbComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

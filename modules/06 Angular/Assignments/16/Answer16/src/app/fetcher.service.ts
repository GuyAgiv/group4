import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  resultSrc: string;
  constructor() { }

  fetchPicture(imgElement: HTMLImageElement) {
    fetch("https://dog.ceo/api/breeds/image/random").then(streamResolved => streamResolved.json()).then(data => { imgElement.src = data.message });
  }

  fetchVideo(aba) {
    fetch("https://random.dog/woof.json").then((resolvedStream) => resolvedStream.json()).then((videoData) => {
      if (videoData.url.indexOf(".mp4") > -1) {
        this.resultSrc = videoData.url;
      }
      else {
        this.fetchVideo(aba);
      }
      
    });
  }
}

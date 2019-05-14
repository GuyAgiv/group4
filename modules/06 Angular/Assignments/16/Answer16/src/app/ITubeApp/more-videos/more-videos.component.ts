import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-videos',
  templateUrl: './more-videos.component.html',
  styleUrls: ['./more-videos.component.css']
})
export class MoreVideosComponent implements OnInit {

  thumbs : {title: string,artist : string ,description : string}[];


  constructor() {
      this.thumbs = [
        {title: 'Dog 1',artist : 'DogMaker 1', description : 'Just a dog 1'},
        {title: 'Dog 2',artist : 'DogMaker 2', description : 'Just a dog 2'},
        {title: 'Dog 3',artist : 'DogMaker 3', description : 'Just a dog 3'},
        {title: 'Dog 4',artist : 'DogMaker 4', description : 'Just a dog 4'},
      ]
   }

  ngOnInit() {
  }

}

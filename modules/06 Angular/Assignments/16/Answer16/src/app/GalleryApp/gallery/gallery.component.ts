import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  arrowLeftSign : string;
  arrowName : string;
  arrowRightSign : string;
  cached : boolean;
  pictures : string[];
  mainPicture : {};

  constructor() { 
    this.arrowLeftSign = 'http://pixsector.com/cache/8ed3eed7/avb6b6c2625bcda563bf1.png';
    this.arrowRightSign = 'http://pixsector.com/cache/d317f9c9/avefdb1ad8fbf8d8b72a2.png';
    this.cached = true;
   
    this.pictures = [
      "https://demo.olympusthemes.com/scaffold/wp-content/uploads/2013/03/image-alignment-300x200.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_DNABqnO_ARVaz2mW0y4rD7SAENckgZufQ-jJ_wi79CdDfQY6",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTV1prkm-6ifqcp_cK66_Za7gnPbzYoN9hu8VZCYiQYgmGpnMh",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4iR8VOXRQgwIKEC68_pBevSp-vWVv8zUmYaENWDar92BG_yT",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMI_t4OkAxdEhPsGUESmDrD_Sy3X1bCL4MRuiROdy_KFE07Vv",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5EHBLl5MqZY1JNjDF4AvWqK6WHlCGAwe3NwFQ-vBLEfp2HnMjbA",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDYl9OX-9USemAplruWjiR504p1w2ZJl6ODS46hj8str623TB",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkT3vEiJxKVWphNlF_xEQh62ri1WCg4cX967SOV_aEDXls2ylMYA",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5Yg_EYviMbsQasn3twaatgRgV0McZ0gLLuMrjxU7qgL1VcRQ",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3j9UOge-HYrRWz740pQXcNR4_yUbFeK1ffUNPjKFPyw3cLhb",
    ];

    
  }

  ngOnInit() {
    
    this.mainPicture = localStorage.getItem('cachingMainPictureProps') !== null ? JSON.parse(localStorage.getItem('cachingMainPictureProps')) : {imgSrc : this.pictures[0], imgIdx : 0};
  }

  onMainPictureChanged(e)
  {
    this.mainPicture = e;
    localStorage.setItem('cachingMainPictureProps', JSON.stringify(this.mainPicture));
  }

  onArrowPressed(e)
  {
    let newIdx = this.mainPicture['imgIdx'] + e;
    
    if(newIdx >= 0 && newIdx <= this.pictures.length - 1)
    {
      this.onMainPictureChanged({'imgSrc' : this.pictures[newIdx], 'imgIdx' : newIdx});
    }
  }

}

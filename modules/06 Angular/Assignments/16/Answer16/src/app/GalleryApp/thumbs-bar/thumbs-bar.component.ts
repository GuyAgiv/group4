import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-thumbs-bar',
  templateUrl: './thumbs-bar.component.html',
  styleUrls: ['./thumbs-bar.component.css']
})
export class ThumbsBarComponent implements OnInit {

  @Input() images : string[];
  @Output() pictureChosen : EventEmitter<{imgSrc: string, imgIdx : number}> = new EventEmitter<{imgSrc: string, imgIdx : number}>();

  constructor() {
   }

  ngOnInit() {
  }

  onImageClicked(imgRef : HTMLImageElement)
  {
    console.log();
    this.pictureChosen.emit({imgSrc : imgRef.getAttribute('src'), imgIdx : Number(imgRef.getAttribute('data-index'))});
  }
}

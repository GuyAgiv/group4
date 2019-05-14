import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  @Input() arrowSign : string;
  @Input() arrowName : string;
  @Output() changeImageByArrow : EventEmitter<number>;
  

  constructor() {
    this.changeImageByArrow = new EventEmitter<number>();
   }

  ngOnInit() {
  }

  arrowClicked(imgRef : HTMLImageElement)
  {
    imgRef.name === 'left' ? this.changeImageByArrow.emit((-1)) : this.changeImageByArrow.emit(1);
  }

}

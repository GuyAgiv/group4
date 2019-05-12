import { Component } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultStartTime : Date;

  constructor()
  {
    this.defaultStartTime = new Date(Date.now());
    this.defaultStartTime.to
  }
}

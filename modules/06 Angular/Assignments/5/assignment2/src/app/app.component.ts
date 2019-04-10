import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links : string[];
  imgSrcs : string[];

  constructor()
  {
   this.links = [
      "https://en.wikipedia.org/wiki/Amsterdam",
      "https://en.wikipedia.org/wiki/Moon",
      "https://en.wikipedia.org/wiki/Tel_Aviv",
      "https://en.wikipedia.org/wiki/Prague",
      "https://en.wikipedia.org/wiki/Holon",
      "https://en.wikipedia.org/wiki/Amsterdam",
      "https://en.wikipedia.org/wiki/Amsterdam",
      "https://en.wikipedia.org/wiki/Amsterdam",
    ];

    this.imgSrcs = [
      "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/631px-FullMoon2010.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tel_Aviv_Promenade_panoramics.jpg/800px-Tel_Aviv_Promenade_panoramics.jpg",
      "https://www.prague.eu/img/pragueeu/u/property/logo-for-share-v2.jpg",
      "https://www.israel21c.org/wp-content/uploads/2016/06/Photo-of-Beersheva-by-Leonard-ZhukovskyShutterstock.com_-1000x657.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/KeizersgrachtReguliersgrachtAmsterdam.jpg",
    ]
  }
}
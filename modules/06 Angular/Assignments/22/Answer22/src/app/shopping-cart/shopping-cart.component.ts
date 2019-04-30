import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  selectedProduct : string;
  products : string[];
  boughtProducts : string[];

  constructor() {
      this.products = ['Choose' , 'Banana', 'Apple', 'Candy', 'Water', 'Carrot' ,'Umbrella', 'Juice' , 'Bread' ,'Chicken' , 'Beef'];
   }

  addItem()
  {
    console.log(this.selectedProduct);
  }

  onProductRemoved(prodRowRef : HTMLTableRowElement)
  {

  }

  onProductSelected(e : Event)
  {
    console.log
  }

  ngOnInit() {
  }

}

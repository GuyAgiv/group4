import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'payment', component: PaymentComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

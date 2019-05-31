import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart-project';
  shopCartOpen = false;

  constructor() { }

  shoppingCart() {
    this.shopCartOpen = true;
  }
}

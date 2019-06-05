import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcart-project';
  appState: boolean;

  constructor() { }

  shoppingCart() {
    this.appState = true;
  }

  recipes() {
    this.appState = false;
  }
}

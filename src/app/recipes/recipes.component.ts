import { Component, OnInit } from '@angular/core';
import { ShopCartListComponent } from '../shop-cart-list/shop-cart-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}

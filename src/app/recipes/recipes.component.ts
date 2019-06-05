import { Component, OnInit, Input } from '@angular/core';
import { ShopCartListComponent } from '../shop-cart-list/shop-cart-list.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeImporterService } from '../recipe-importer.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeImporterService]
})
export class RecipesComponent implements OnInit {
  recipeName: string;
  recipeNames = [];
  recipeChosen = [];
  displayRecipe = false;
  recipes;

  constructor(private service: RecipeImporterService) {
   }

  ngOnInit() {
    this.recipes = this.service.recipeDict;
    for (const name of Object.keys(this.recipes)) {
      this.recipeNames.push(name);
    }
  }

  recipeSelected(name) {
    this.displayRecipe = true;
    this.recipeName = name;
    this.recipeChosen = this.service.getRecipe(name);
  }
}

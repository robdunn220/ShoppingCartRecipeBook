import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeImporterService } from './recipe-importer.service';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShopCartListComponent } from './shop-cart-list/shop-cart-list.component';

const routes: Routes = [
  { path: 'app-shop-cart-list', component: ShopCartListComponent },
  { path: 'app-recipes', component: RecipesComponent },
  { path: 'app-recipe-list', component: RecipeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

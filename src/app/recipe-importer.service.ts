import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeImporterService {
  recipeDict = {
    Chicken: [
      ['Chicken', '3 medium'],
      ['Onion', '1 medium yellow'],
      ['Garlic', '2 cloves'],
      ['Olive Oil', '3T']
    ],
    Pork: [
      ['Pork Butt', '3 lbs.'],
      ['Garlic', '4 Cloves']
    ]
  };

  constructor() {
   }

  getRecipe(name) {
    for (const rName of Object.keys(this.recipeDict)) {
      if (rName === name) {
        const recipeChosen = this.recipeDict[rName];
        return recipeChosen;
      }
    }
  }
}

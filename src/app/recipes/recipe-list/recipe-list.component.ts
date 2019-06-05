import { Component, OnInit, Input } from '@angular/core';
import { RecipeImporterService } from 'src/app/recipe-importer.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipeName: string;
  recipeChosen: [];

  createdTable = false;

  constructor(private service: RecipeImporterService) { }

  ngOnInit() {
    this.recipeChosen = this.service.getRecipe(this.recipeName);
   }
}

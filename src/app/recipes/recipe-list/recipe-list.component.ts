import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Melon', 'Melon Charentais', 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/05/29f8980b-e7e1-4f73-a14f-cc415d599134/870x489_maxwatier041179.webp'),
    new Recipe('Pasteque', 'Pasteque Mounzou', 'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/large/public/Import/pasteque_istock.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

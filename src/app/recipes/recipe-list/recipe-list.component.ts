import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test', 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/05/29f8980b-e7e1-4f73-a14f-cc415d599134/870x489_maxwatier041179.webp'),
    new Recipe('A Test Recipe', 'This is simply test', 'https://cdn.radiofrance.fr/s3/cruiser-production/2019/05/29f8980b-e7e1-4f73-a14f-cc415d599134/870x489_maxwatier041179.webp')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}

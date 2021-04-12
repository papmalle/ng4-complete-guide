import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addEvent = new EventEmitter<{ name: string, amount: number }>();
  name: string = '';
  amount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  addIngredient(inputData: { name: string, amount: number }): void {
    console.log(inputData);
    this.addEvent.emit(inputData);
  }
}

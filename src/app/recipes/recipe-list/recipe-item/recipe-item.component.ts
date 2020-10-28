import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {RecipeModel} from '../../RecipeModel';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit { 

  @Output() recipeClicked = new EventEmitter<void>();

  @Input() recipe: RecipeModel;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(){
    this.recipeClicked.emit();
  }

}

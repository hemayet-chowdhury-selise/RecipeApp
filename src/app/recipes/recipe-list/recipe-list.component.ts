import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RecipeModel} from '../RecipeModel';
import {RecipesService} from '../recipes.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  
})
export class RecipeListComponent implements OnInit {

   

  recipeList: RecipeModel[];
 

  constructor(private recipesService: RecipesService){}
 
  
  ngOnInit(){
    this.recipeList = this.recipesService.recipeList;
  }

  onRecipeSelected(recipeItem){
    this.recipesService.recipeSelected.emit(recipeItem);
  }
  
 

}

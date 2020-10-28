import {RecipeModel} from './RecipeModel';
import { EventEmitter, Injectable } from '@angular/core';
import { IngredientModel } from '../shared/IngredientModel';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService{

    recipeSelected = new EventEmitter<RecipeModel>();

    constructor(private shoppingListService: ShoppingListService ){}

    recipeList: RecipeModel[] = [ new RecipeModel('My Recipe', 'Spicy', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
    
    [new IngredientModel('Sugar', 10), new IngredientModel('Meat', 5)]
    
    ),
    new RecipeModel('Your Recipe', 'Sweet', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636', [new IngredientModel('Spice', 10), new IngredientModel('Meat', 5)]),
    ];

    recipeDetail: RecipeModel;

    onAddToList(ingredients: IngredientModel[]){
        this.shoppingListService.OnAddToList(ingredients);
    }

    getById(id: number){
        return this.recipeList[id];
    }
   


}
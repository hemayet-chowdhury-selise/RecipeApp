import {IngredientModel} from '../shared/IngredientModel';

export class ShoppingListService{
    ingredients: IngredientModel[] = [new IngredientModel('Apple', 10), new IngredientModel('Oranges',12)];
    onIngAdded(ing: IngredientModel){
        this.ingredients.push(ing);
      }

    OnAddToList(ingredients: IngredientModel[]){
      this.ingredients.push(...ingredients);
    }
}
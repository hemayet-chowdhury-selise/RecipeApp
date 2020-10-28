import {IngredientModel} from '../shared/IngredientModel';

export class RecipeModel{

    name: string;
    description: string;
    image: string;
    ingredients: IngredientModel[];

    constructor(name: string, desc: string, image: string, ingredients: IngredientModel[]){
        this.name = name;
        this.description = desc;
        this.image = image;
        this.ingredients = ingredients;

    }

}
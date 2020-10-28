import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {RecipeModel } from './RecipeModel';
import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  currentRecipe: RecipeModel;

  constructor(private recipesService: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe((recipe: RecipeModel) => {
        this.currentRecipe = recipe;
    });
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route}); 
  }

}

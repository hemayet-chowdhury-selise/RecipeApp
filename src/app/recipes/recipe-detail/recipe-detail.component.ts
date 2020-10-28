import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeModel } from '../RecipeModel';
import {RecipesService} from '../recipes.service';

 

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeCaught: RecipeModel;
  id: number;
  constructor(private recipesService: RecipesService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=> {
          this.id = +params['id'];
          this.recipeCaught = this.recipesService.getById(this.id);
      }
    );
  }

  moveToList(){
    this.recipesService.onAddToList(this.recipeCaught.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['../',this.id, 'edit'], {relativeTo: this.route});
  }

}

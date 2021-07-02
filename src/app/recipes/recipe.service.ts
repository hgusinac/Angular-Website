import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import {  Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{

  recipesChanged= new Subject<Recipe[]>();

   private recipes: Recipe[] =[
        new Recipe(
          'Burger Recipe',
          'This is simplay a test',
        'https://bigseventravel.com/wp-content/uploads/2019/06/Screenshot-2019-02-19-at-16.50.03.png',
        [
          new Ingredient('Meat',1),
          new Ingredient('Tomato',1),
          new Ingredient('Onion',1),

        ]),
        
        new Recipe(
          'Pizza Recipe',
          'This is a test',
        'https://bigseventravel.com/wp-content/uploads/2019/06/Screenshot-2019-06-29-at-13.07.58-1024x702.png',
        [
          
          new Ingredient('Meat',1),
          new Ingredient('Tomato',1),
          new Ingredient('Onion',1),
        ])
    
      ];

      constructor(private slSevice: ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
      return this.recipes[index];
      }
      AddIngridToShopping(ingredients: Ingredient[]){
        this.slSevice.addIngredients(ingredients);
      }
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());

      }
      updateRecipe(index: number,newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
      }
}
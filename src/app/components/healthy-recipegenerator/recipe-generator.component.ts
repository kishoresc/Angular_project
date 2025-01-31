import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-generator',
  templateUrl: './recipe-generator.component.html',
  styleUrls: ['./recipe-generator.component.css']
})
export class RecipeGeneratorComponent {
  recipe: string = "";

  constructor(private recipeService: RecipeService) {}

  generateRecipe(): void {
    this.recipe = "";  // Reset recipe for smooth animation

    setTimeout(() => {
      this.recipe = this.recipeService.getRandomRecipe();
    }, 500); // Small delay for a better effect
  }
}

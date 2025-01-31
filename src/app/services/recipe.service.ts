import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: string[] = [
    "Avocado Toast: Toasted bread with mashed avocado, salt, and lemon.",
    "Oatmeal Bowl: Oats with honey, banana, and cinnamon.",
    "Smoothie: Blend banana, yogurt, and honey.",
    "Vegetable Stir-Fry: Stir-fry broccoli, bell pepper, and carrots with soy sauce.",
    "Banana Pancakes: Mash banana and mix with eggs to make pancakes.",
    "Chickpea Salad: Chickpeas, cucumber, tomato, olive oil, and lemon juice.",
    "Grilled Chicken Salad: Grilled chicken, lettuce, cucumber, and tomatoes with olive oil.",
    "Mango Salsa: Mango, red onion, cilantro, and lime juice."
  ];

  getRandomRecipe(): string {
    return this.recipes[Math.floor(Math.random() * this.recipes.length)];
  }
}

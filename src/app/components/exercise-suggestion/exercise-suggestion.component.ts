import { Component } from '@angular/core';
import { ExerciseService } from '../../services/excercise.service';

@Component({
  selector: 'app-exercise-suggestion',
  templateUrl: './exercise-suggestion.component.html',
  styleUrls: ['./exercise-suggestion.component.css']
})
export class ExerciseSuggestionComponent {
  exercise: string = "";

  constructor(private exerciseService: ExerciseService) {}

  generateExercise(): void {
    this.exercise = ""; // Reset text for animation effect

    setTimeout(() => {
      this.exercise = this.exerciseService.getRandomExercise();
    }, 500); // Small delay for smooth fade-in effect
  }
}

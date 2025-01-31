import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private exercises: string[] = [
    "Push-ups: Great for chest, triceps, and core strength.",
    "Squats: Target your thighs, hips, and glutes.",
    "Lunges: Excellent for leg strength and balance.",
    "Jumping Jacks: A cardio move for full-body workout.",
    "Plank: Strengthens core, shoulders, and arms.",
    "Mountain Climbers: Great for cardio and full-body strength.",
    "Burpees: A full-body workout that builds strength and endurance.",
    "Bicycle Crunches: Effective for targeting the abdominal muscles.",
    "Deadlifts: Strengthens back, glutes, and hamstrings.",
    "High Knees: A cardio move to boost heart rate and stamina.",
    "Tricep Dips: Focuses on the triceps and upper body.",
    "Leg Raises: Targets the lower abdominal muscles.",
    "Side Plank: Works the obliques and strengthens the core.",
    "Jump Squats: Builds explosive strength and targets thighs and glutes.",
    "Russian Twists: Effective for targeting the obliques and abs.",
    "Neck Stretch: Gently stretch your neck to relieve tension and improve flexibility.",
    "Hamstring Stretch: Stretch your hamstrings to improve flexibility and reduce muscle tightness."
  ];

  getRandomExercise(): string {
    return this.exercises[Math.floor(Math.random() * this.exercises.length)];
  }
}

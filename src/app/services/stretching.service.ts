import { Injectable } from '@angular/core';

export interface Stretch {
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class StretchingService {
  private stretches: Stretch[] = [
    { name: "Push-ups", description: "Start in a plank position with hands shoulder-width apart, lower your body to the ground, then push up back to the start position." },
    { name: "Squats", description: "Stand with feet shoulder-width apart, bend your knees and lower your hips to sit back, then return to the standing position." },
    { name: "Lunges", description: "Step forward with one leg, lower your hips until both knees are bent at 90-degree angles, then return to the starting position." },
    { name: "Jumping Jacks", description: "Start standing, jump while spreading your legs and raising your arms overhead, then return to the starting position." },
    { name: "Plank", description: "Hold your body in a straight line from head to heels, supported by your forearms and toes, keeping your core engaged." },
    { name: "Mountain Climbers", description: "Start in a plank position and quickly alternate bringing your knees towards your chest, like you're 'climbing' on the spot." },
    { name: "Burpees", description: "Start standing, squat down, place your hands on the floor, jump your feet back into a plank, perform a push-up, then jump back to your feet and leap into the air." },
    { name: "Bicycle Crunches", description: "Lie on your back, bring your knees to a 90-degree angle, and alternate touching your elbows to the opposite knee in a pedaling motion." },
    { name: "Deadlifts", description: "With feet shoulder-width apart and a straight barbell in front of you, bend at the hips, lower the bar to the ground, and lift back up by engaging your glutes and hamstrings." },
    { name: "High Knees", description: "March in place while lifting your knees as high as possible, alternately and rapidly." },
    { name: "Tricep Dips", description: "Sit on the edge of a bench or chair, place your hands next to your hips, lower your body by bending your elbows, then push back up to the starting position." },
    { name: "Leg Raises", description: "Lie on your back, lift your legs towards the ceiling while keeping them straight, and then slowly lower them back down without touching the ground." },
    { name: "Side Plank", description: "Lie on your side with your elbow beneath your shoulder, lift your hips to form a straight line from head to heels, and hold." },
    { name: "Jump Squats", description: "Perform a regular squat, then explosively jump upwards, landing softly back into the squat position." },
    { name: "Russian Twists", description: "Sit with your knees bent and feet off the floor, lean back slightly, and twist your torso side to side while holding a weight or hands together." },
    { name: "Neck Stretch", description: "Slowly tilt your head to each side, holding for 15 seconds on each side." },
    { name: "Hamstring Stretch", description: "Sit on the floor and reach for your toes while keeping your legs straight." }
  ];

  private currentIndex = 0;

  getCurrentStretch(): Stretch {
    return this.stretches[this.currentIndex];
  }

  getNextStretch(): Stretch {
    this.currentIndex = (this.currentIndex + 1) % this.stretches.length;
    return this.stretches[this.currentIndex];
  }
}

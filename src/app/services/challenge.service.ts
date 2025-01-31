import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {
  private challenges = [
    { title: '10,000 Steps a Day Challenge', description: 'Walk 10,000 steps every day for a month.' },
    { title: 'Drink 2L of Water Challenge', description: 'Drink at least 2 liters of water daily for a month.' },
    { title: 'Hydration Challenge', description: 'Drink 8 glasses of water every day for a month.' },
    { title: 'Healthy Breakfast Challenge', description: 'Eat a nutritious breakfast every day for 2 weeks.' },
    { title: 'No Sugar Challenge', description: 'Avoid added sugar for 30 days.' },
    { title: '30-Minute Workout Challenge', description: 'Exercise for at least 30 minutes every day for a month.' },
    { title: 'Sleep Quality Challenge', description: 'Get 7-8 hours of quality sleep every night for 30 days.' },
    { title: 'Stretching Routine Challenge', description: 'Do a 10-minute stretching routine every day for 21 days.' },
    { title: 'Mindfulness Challenge', description: 'Practice mindfulness or meditation for 10 minutes every day for 2 weeks.' },
    { title: 'Plant-Based Eating Challenge', description: 'Eat plant-based meals every day for 2 weeks.' },
    { title: 'No Fast Food Challenge', description: 'Avoid fast food for 30 days.' },
    { title: 'Fitness Milestone Challenge', description: 'Increase your personal best in any exercise by 10% in one month.' }
  ];

  getRandomChallenge() {
    return this.challenges[Math.floor(Math.random() * this.challenges.length)];
  }
}

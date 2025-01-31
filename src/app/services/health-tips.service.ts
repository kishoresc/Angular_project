import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HealthTipsService {
  private tips: string[] = [
    "🛏️ Get enough sleep each night.",
    "💧 Drink plenty of water every day.",
    "🏃‍♂️ Get at least 30 minutes of exercise a day.",
    "🥦 Eat a balanced diet rich in fruits and vegetables.",
    "🧘‍♀️ Practice mindfulness or meditation to reduce stress."
  ];

  constructor() {}

  getHealthTips(): string[] {
    return this.tips;
  }
}

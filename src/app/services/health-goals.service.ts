import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthGoalsService {

  constructor() {}

  // Simulate fetching health goals from an API
  getHealthGoals(): Observable<{ aim: string, target: string, progress: string }[]> {
    // Simulated API call
    return of([
      { aim: 'Lose Weight', target: '10kg', progress: '3kg' },
      { aim: 'Increase Stamina', target: '30 mins run', progress: '15 mins' },
      { aim: 'Improve Flexibility', target: 'Touch toes', progress: '5 inches away' }
    ]);
  }
}

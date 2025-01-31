import { Component, ChangeDetectorRef } from '@angular/core';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent {
  suggestedChallenge: any = null;

  constructor(private challengeService: ChallengeService, private cdr: ChangeDetectorRef) {}

  suggestChallenge(): void {
    this.suggestedChallenge = this.challengeService.getRandomChallenge();
    console.log('Suggested Challenge:', this.suggestedChallenge);  // Debugging line
    this.cdr.detectChanges();  // Manually trigger change detection
  }
}

import { Component, OnInit } from '@angular/core';
import { HealthGoalsService } from '../../services/health-goals.service';  
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motivation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.css']
})
export class YourComponent implements OnInit {
  healthGoals: { aim: string, target: string, progress: string }[] = [];
  currentQuote = "Success is the sum of small efforts, repeated day in and day out.";

  constructor(
    private healthGoalsService: HealthGoalsService,
    private cdr: ChangeDetectorRef  
  ) {}

  ngOnInit() {
    this.healthGoalsService.getHealthGoals().subscribe(data => {
      this.healthGoals = data;
      this.cdr.detectChanges();
    });
  }

  getNewQuote() {
    const quotes = [
      "Success is the sum of small efforts, repeated day in and day out.",
      "The only bad workout is the one that didn’t happen.",
      "Don’t limit your challenges, challenge your limits.",
      "The harder you work for something, the greater you’ll feel when you achieve it.",
      "Believe you can and you're halfway there.",
      "Push yourself because no one else is going to do it for you.",
      "Don’t stop when you're tired, stop when you're done.",
      "Success doesn’t just find you. You have to go out and get it.",
      "Hardships often prepare ordinary people for an extraordinary destiny.",
      "Your only limit is your mind.",
      "The key to success is to focus on goals, not obstacles.",
      "If you want it, go get it. Period.",
      "Dream it. Wish it. Do it.",
      "Work hard in silence, let your success be your noise.",
      "Strive for progress, not perfection."
    ];
    this.currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    title = "Welcome to Health Challenge Tracker!";
  constructor(private router: Router) {}

  goToChallenges() {
    this.router.navigate(['/challenges']);
  }
}

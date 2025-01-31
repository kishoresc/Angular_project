import { Component } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DashboardComponent],  // ✅ Include RouterModule for routing
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private router: Router) {}

  goToChallenges() {
    this.router.navigate(['/challenges']);  // ✅ Route to "/challenges"
  }
}

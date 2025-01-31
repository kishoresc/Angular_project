import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 25,
    weight: 74,
    height: 170,
    completedChallenges: 5
  };
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports : [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Retrieve saved user credentials from localStorage
    const savedCredentials = JSON.parse(localStorage.getItem('userCredentials') || '{}');

    // Check if the entered credentials match the saved ones
    if (savedCredentials.username === this.username && savedCredentials.password === this.password) {
      alert('Login successful!');
      this.router.navigate(['/home']);  // Redirect to the home page after successful login
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';  // Show error message for invalid credentials
    }
  }
}

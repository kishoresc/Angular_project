import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';  // ✅ Import RouterModule

@Component({
  selector: 'app-register',
  imports : [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Check if password and confirmPassword match
    if (this.password === this.confirmPassword) {
      // Save user credentials in localStorage
      localStorage.setItem('userCredentials', JSON.stringify({ username: this.username, password: this.password }));
      alert('Registration successful!');
      this.router.navigate(['/login']);  // Redirect to the login page after registration
    } else {
      alert('Passwords do not match!');
    }
  }
}

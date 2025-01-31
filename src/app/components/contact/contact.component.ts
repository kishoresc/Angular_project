import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports : [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    if (this.name && this.email && this.message) {
      // Display a simple alert
      alert('Thank you for your message! We will get back to you soon.');

      // Clear the form fields after submission
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
}

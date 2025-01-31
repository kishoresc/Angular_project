import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  imports : [FormsModule],
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent {
  weight: number = 0;
  height: number = 0;
  bmi: number | null = null;

  constructor(private router: Router) {}

  calculateBMI(): void {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);

      alert(`Your BMI is: ${this.bmi.toFixed(2)}`);
    } else {
      alert('Please enter valid weight and height!');
    }
  }

  get formattedBMI(): string {
    return this.bmi !== null ? this.bmi.toFixed(2) : '';
  }

}

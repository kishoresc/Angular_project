import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // You can add properties here if needed for dynamic content
  aboutText: string = 'We are a team of passionate developers working on Angular projects!';
}

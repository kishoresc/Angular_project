import { Component } from '@angular/core';
import { StretchingService, Stretch } from '../../services/stretching.service';

@Component({
  selector: 'app-stretching-guide',
  templateUrl: './stretching-guide.component.html',
  styleUrls: ['./stretching-guide.component.css']
})
export class StretchingGuideComponent {
  currentStretch: Stretch;

  constructor(private stretchingService: StretchingService) {
    this.currentStretch = this.stretchingService.getCurrentStretch();
  }

  nextStretch(): void {
    this.currentStretch = this.stretchingService.getNextStretch();
  }
}

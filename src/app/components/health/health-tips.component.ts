import { Component, OnInit } from '@angular/core';
import { HealthTipsService } from '../../services/health-tips.service';

@Component({
  selector: 'app-health-tips',
  templateUrl: './health-tips.component.html',
  styleUrls: ['./health-tips.component.css']
})
export class HealthTipsComponent implements OnInit {
  healthTips: string[] = []; // Array to store tips

  constructor(private healthTipsService: HealthTipsService) {}

  ngOnInit(): void {
    this.healthTips = this.healthTipsService.getHealthTips(); // Fetch tips from service
  }
}

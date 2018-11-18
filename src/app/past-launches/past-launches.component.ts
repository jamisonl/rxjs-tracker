import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../launch.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.component.html',
  styleUrls: ['./past-launches.component.css']
})
export class PastLaunchesComponent implements OnInit {
  past: Launch[];
  constructor(private launchService: LaunchService) { }
  getPast(): void {
    this.launchService.getPast().subscribe(past => this.past = past)
  }
  ngOnInit() {
    this.getPast();
  }

}

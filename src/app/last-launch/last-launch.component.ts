import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-last-launch',
  templateUrl: './last-launch.component.html',
  styleUrls: ['./last-launch.component.css']
})
export class LastLaunchComponent implements OnInit {
  launch: Launch;
  constructor(private launchService: LaunchService) { }
  getLast(): void {
    this.launchService.getLast().subscribe(launch => this.launch = launch)
  }
  ngOnInit() {
    this.getLast()
  }

}

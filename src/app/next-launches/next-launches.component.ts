import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';

@Component({
  selector: 'app-next-launches',
  templateUrl: './next-launches.component.html',
  styleUrls: ['./next-launches.component.css']
})
export class NextLaunchesComponent implements OnInit {
  launches: Launch[]
  constructor(private launchService: LaunchService) { }
  getUpcoming(): void {
    this.launchService.getUpcoming().subscribe(launches => this.launches = launches)
  }
  ngOnInit() {
    this.getUpcoming();
  }

}

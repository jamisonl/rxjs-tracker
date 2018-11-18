import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../launch.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Launch } from '../launch';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss']
})
export class LaunchDetailComponent implements OnInit {
  launch: Launch;
  constructor(private launchService: LaunchService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getLaunch();
  }
  getLaunch(): void {
    const id = +this.route.snapshot.paramMap.get('flight_number');
    this.launchService.getLaunch(id).subscribe(launch => this.launch = launch)
  }
  goBack(): void {
    this.location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { LaunchService } from '../launch.service';
import { Launch } from '../launch';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  next: Launch;
  constructor(private launchService: LaunchService) { }

  getNext(): void {
    this.launchService.getNext().subscribe(next => this.next = next)
  }

  ngOnInit() {
    this.getNext()
  }

}

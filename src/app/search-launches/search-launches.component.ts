import { Component, OnInit } from '@angular/core';
import { Launch } from '../launch';
import { LaunchService } from '../launch.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search-launches',
  templateUrl: './search-launches.component.html',
  styleUrls: ['./search-launches.component.css']
})
export class SearchLaunchesComponent implements OnInit {
  launches$: Observable<Launch[]>;
  private searchTerm = new Subject<string>();
  constructor(private launchService: LaunchService) { }
  search(term: string): void {
    this.searchTerm.next(term)
  }

  ngOnInit(): void {
    this.launches$ = this.searchTerm.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) => this.launchService.search(term))
    )
  }

}

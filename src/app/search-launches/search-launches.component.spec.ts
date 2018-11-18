import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaunchesComponent } from './search-launches.component';

describe('SearchLaunchesComponent', () => {
  let component: SearchLaunchesComponent;
  let fixture: ComponentFixture<SearchLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

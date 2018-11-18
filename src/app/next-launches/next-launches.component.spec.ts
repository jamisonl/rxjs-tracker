import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLaunchesComponent } from './next-launches.component';

describe('NextLaunchesComponent', () => {
  let component: NextLaunchesComponent;
  let fixture: ComponentFixture<NextLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextLaunchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

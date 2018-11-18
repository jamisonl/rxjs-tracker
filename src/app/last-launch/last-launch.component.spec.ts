import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastLaunchComponent } from './last-launch.component';

describe('LastLaunchComponent', () => {
  let component: LastLaunchComponent;
  let fixture: ComponentFixture<LastLaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastLaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

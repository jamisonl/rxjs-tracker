import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DashViewComponent } from './dash-view.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { LastLaunchComponent } from '../last-launch/last-launch.component';
import { SearchLaunchesComponent } from '../search-launches/search-launches.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DashViewComponent', () => {
  let component: DashViewComponent;
  let fixture: ComponentFixture<DashViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashViewComponent, CountdownComponent, LastLaunchComponent, SearchLaunchesComponent ],
      imports: [ RouterTestingModule, HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PastLaunchesComponent } from './past-launches.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PastLaunchesComponent', () => {
  let component: PastLaunchesComponent;
  let fixture: ComponentFixture<PastLaunchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastLaunchesComponent ],
      imports: [ RouterTestingModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

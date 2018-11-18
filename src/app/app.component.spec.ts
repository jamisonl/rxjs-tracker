import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterLinkWithHref } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'launch-tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('launch-tracker');
  });

  it('should render title in an anchor element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Launch Tracker');
  });
  it('should have the correct route for Launch Tracker title anchor element', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const href = fixture.debugElement.query(By.css('.main-header')).nativeElement.getAttribute('href');
    expect(href).toEqual('/dashboard')
  })
  it('should have the correct route for Previous Launches', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const href = fixture.debugElement.query(By.css('.nav-past')).nativeElement.getAttribute('href');
    expect(href).toEqual('/past')
  })
  it('should have the correct route for home', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const href = fixture.debugElement.query(By.css('.nav-home')).nativeElement.getAttribute('href');
    expect(href).toEqual('/dashboard')
  })
  it('should have the correct route for Upcoming Launches', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const href = fixture.debugElement.query(By.css('.nav-up')).nativeElement.getAttribute('href');
    expect(href).toEqual('/upcoming')
  })
});

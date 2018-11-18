import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownComponent } from './countdown/countdown.component';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { DashViewComponent } from './dash-view/dash-view.component';
import { PastLaunchesComponent } from './past-launches/past-launches.component';
import { LastLaunchComponent } from './last-launch/last-launch.component';
import { NextLaunchesComponent } from './next-launches/next-launches.component';
import { SearchLaunchesComponent } from './search-launches/search-launches.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    LaunchDetailComponent,
    DashViewComponent,
    PastLaunchesComponent,
    LastLaunchComponent,
    NextLaunchesComponent,
    SearchLaunchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

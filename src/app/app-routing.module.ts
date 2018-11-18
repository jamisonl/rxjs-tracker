import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchDetailComponent } from './launch-detail/launch-detail.component';
import { DashViewComponent } from './dash-view/dash-view.component';
import { CountdownComponent } from './countdown/countdown.component';
import { PastLaunchesComponent } from './past-launches/past-launches.component';
import { NextLaunchesComponent } from './next-launches/next-launches.component';

const routes: Routes = [
  {path: 'detail/:flight_number', component: LaunchDetailComponent },
  {path: 'dashboard', component: DashViewComponent},
  {path: 'next', component: CountdownComponent},
  {path: 'past', component: PastLaunchesComponent},
  {path: 'upcoming', component: NextLaunchesComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

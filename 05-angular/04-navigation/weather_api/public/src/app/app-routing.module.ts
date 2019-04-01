import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { DallasComponent } from './dallas/dallas.component';
import { DcComponent } from './dc/dc.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'chicago', component: ChicagoComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'dallas', component: DallasComponent },
  { path: 'dc', component: DcComponent },
  { path: 'sanjose', component: SanjoseComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

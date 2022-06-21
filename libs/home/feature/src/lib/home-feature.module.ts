import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './container/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LandingComponent} 
    ]),
  ],
  declarations: [LandingComponent],
})
export class HomeFeatureModule {}

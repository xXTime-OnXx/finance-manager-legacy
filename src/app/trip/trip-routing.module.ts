import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripPage } from './trip.page';

const routes: Routes = [
  {
    path: '',
    component: TripPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripPageRoutingModule {}

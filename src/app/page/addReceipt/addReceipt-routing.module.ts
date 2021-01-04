import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTripPage } from './addReceipt.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddReceiptPageRoutingModule {}

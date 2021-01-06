import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditReceiptPage } from './edit-receipt.page';

const routes: Routes = [
  {
    path: '',
    component: EditReceiptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditReceiptPageRoutingModule {}

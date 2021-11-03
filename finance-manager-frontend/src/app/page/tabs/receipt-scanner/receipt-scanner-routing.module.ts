import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiptScannerPage } from './receipt-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: ReceiptScannerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptScannerPageRoutingModule {}

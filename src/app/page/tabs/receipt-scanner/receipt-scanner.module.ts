import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceiptScannerPage } from './receipt-scanner.page';

import { ReceiptScannerPageRoutingModule } from './receipt-scanner-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReceiptScannerPageRoutingModule
  ],
  declarations: [ReceiptScannerPage]
})
export class ReceiptScannerPageModule {}

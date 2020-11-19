import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReceiptScannerPage } from './receipt-scanner.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ReceiptScannerPageRoutingModule } from './receipt-scanner-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReceiptScannerPageRoutingModule
  ],
  declarations: [ReceiptScannerPage]
})
export class ReceiptScannerPageModule {}

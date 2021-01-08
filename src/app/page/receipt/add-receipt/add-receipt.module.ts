import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReceiptPageRoutingModule } from './add-receipt-routing.module';

import { CreateTripPage } from './add-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReceiptPageRoutingModule
    ],
  declarations: [CreateTripPage]
})
export class AddReceiptPageModule {}

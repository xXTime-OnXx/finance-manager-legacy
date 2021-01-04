import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddReceiptPageRoutingModule } from './addReceipt-routing.module';

import { CreateTripPage } from './addReceipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddReceiptPageModule
  ],
  declarations: [CreateTripPage]
})
export class AddReceiptPageModule {}

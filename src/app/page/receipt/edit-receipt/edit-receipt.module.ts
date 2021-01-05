import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditReceiptPageRoutingModule } from './edit-receipt-routing.module';

import { CreateTripPage } from './edit-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditReceiptPageModule
    ],
  declarations: [CreateTripPage]
})
export class EditReceiptPageModule {}

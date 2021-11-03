import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditReceiptPageRoutingModule } from './edit-receipt-routing.module';

import { EditReceiptPage } from './edit-receipt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditReceiptPageRoutingModule
    ],
  declarations: [EditReceiptPage]
})
export class EditReceiptPageModule {}

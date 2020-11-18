import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TripPage } from './trip.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TripPageRoutingModule } from './trip-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TripPageRoutingModule
  ],
  declarations: [TripPage]
})
export class TripPageModule {}

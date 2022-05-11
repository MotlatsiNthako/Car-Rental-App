import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatteryStatusPageRoutingModule } from './battery-status-routing.module';

import { BatteryStatusPage } from './battery-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatteryStatusPageRoutingModule
  ],
  declarations: [BatteryStatusPage]
})
export class BatteryStatusPageModule {}

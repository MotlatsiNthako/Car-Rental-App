import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatteryStatusPage } from './battery-status.page';

const routes: Routes = [
  {
    path: '',
    component: BatteryStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatteryStatusPageRoutingModule {}

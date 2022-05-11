import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NthakoMotorsPage } from './nthako-motors.page';

const routes: Routes = [
  {
    path: '',
    component: NthakoMotorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NthakoMotorsPageRoutingModule {}

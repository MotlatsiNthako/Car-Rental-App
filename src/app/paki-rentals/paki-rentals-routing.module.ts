import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PakiRentalsPage } from './paki-rentals.page';

const routes: Routes = [
  {
    path: '',
    component: PakiRentalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PakiRentalsPageRoutingModule {}

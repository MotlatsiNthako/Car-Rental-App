import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrbanPage } from './urban.page';

const routes: Routes = [
  {
    path: '',
    component: UrbanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrbanPageRoutingModule {}

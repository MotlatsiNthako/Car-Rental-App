import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrbanPageRoutingModule } from './urban-routing.module';

import { UrbanPage } from './urban.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrbanPageRoutingModule
  ],
  declarations: [UrbanPage]
})
export class UrbanPageModule {}

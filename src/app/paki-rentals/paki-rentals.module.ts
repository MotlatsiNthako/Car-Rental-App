import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PakiRentalsPageRoutingModule } from './paki-rentals-routing.module';

import { PakiRentalsPage } from './paki-rentals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PakiRentalsPageRoutingModule
  ],
  declarations: [PakiRentalsPage]
})
export class PakiRentalsPageModule {}

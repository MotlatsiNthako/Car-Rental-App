import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NthakoMotorsPageRoutingModule } from './nthako-motors-routing.module';

import { NthakoMotorsPage } from './nthako-motors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NthakoMotorsPageRoutingModule
  ],
  declarations: [NthakoMotorsPage]
})
export class NthakoMotorsPageModule {}

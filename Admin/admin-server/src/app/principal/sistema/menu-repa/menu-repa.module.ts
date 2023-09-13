import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRepaPageRoutingModule } from './menu-repa-routing.module';

import { MenuRepaPage } from './menu-repa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRepaPageRoutingModule
  ],
  declarations: [MenuRepaPage]
})
export class MenuRepaPageModule {}

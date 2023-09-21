import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosModificarPageRoutingModule } from './productos-modificar-routing.module';

import { ProductosModificarPage } from './productos-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosModificarPageRoutingModule
  ],
  declarations: [ProductosModificarPage]
})
export class ProductosModificarPageModule {}

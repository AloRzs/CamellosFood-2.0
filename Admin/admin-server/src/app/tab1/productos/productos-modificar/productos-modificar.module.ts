import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosModificarPageRoutingModule } from './productos-modificar-routing.module';

import { ProductosModificarPage } from './productos-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosModificarPageRoutingModule,ReactiveFormsModule
  ],
  declarations: [ProductosModificarPage]
})
export class ProductosModificarPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosAgregarPageRoutingModule } from './productos-agregar-routing.module';

import { ProductosAgregarPage } from './productos-agregar.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosAgregarPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ProductosAgregarPage]
})
export class ProductosAgregarPageModule {}

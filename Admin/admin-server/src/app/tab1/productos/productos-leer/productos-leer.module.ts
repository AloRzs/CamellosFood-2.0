import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosLeerPageRoutingModule } from './productos-leer-routing.module';

import { ProductosLeerPage } from './productos-leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosLeerPageRoutingModule
  ],
  declarations: [ProductosLeerPage]
})
export class ProductosModificarPageModule {}

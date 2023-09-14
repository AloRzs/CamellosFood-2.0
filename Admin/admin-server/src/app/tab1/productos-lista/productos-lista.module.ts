import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosListaPageRoutingModule } from './productos-lista-routing.module';

import { ProductosListaPage } from './productos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosListaPageRoutingModule
  ],
  declarations: [ProductosListaPage]
})
export class ProductosListaPageModule {}

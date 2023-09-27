import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPedidosPageRoutingModule } from './mapa-pedidos-routing.module';

import { MapaPedidosPage } from './mapa-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPedidosPageRoutingModule
  ],
  declarations: [MapaPedidosPage]
})
export class MapaPedidosPageModule {}

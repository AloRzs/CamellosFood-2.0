import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminarPedidoPageRoutingModule } from './terminar-pedido-routing.module';

import { TerminarPedidoPage } from './terminar-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminarPedidoPageRoutingModule
  ],
  declarations: [TerminarPedidoPage]
})
export class TerminarPedidoPageModule {}

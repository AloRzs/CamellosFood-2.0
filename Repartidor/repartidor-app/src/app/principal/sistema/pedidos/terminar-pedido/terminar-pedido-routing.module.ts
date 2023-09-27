import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TerminarPedidoPage } from './terminar-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: TerminarPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TerminarPedidoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPedidosPage } from './mapa-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPedidosPageRoutingModule {}

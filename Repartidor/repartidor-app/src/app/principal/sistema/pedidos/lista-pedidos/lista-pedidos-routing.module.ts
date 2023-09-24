import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidosPage } from './lista-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPedidosPage
  },
  {
    path: 'detalle-pedido/:pedidoId', // Agregamos un parámetro ":pedidoId" en la ruta
    loadChildren: () => import('./detalle-pedido/detalle-pedido.module').then(m => m.DetallePedidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPedidosPageRoutingModule {}

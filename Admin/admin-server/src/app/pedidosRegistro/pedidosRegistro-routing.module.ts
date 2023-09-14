import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosRegistroPage } from './pedidosRegistro.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosRegistroPage,
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./detalle-registro/detalle-registro.module').then( m => m.DetalleRegistroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRegistroPageRoutingModule {}

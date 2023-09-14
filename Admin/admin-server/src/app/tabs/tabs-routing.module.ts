import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'productos-registro',
        loadChildren: () => import('../tab1/productosRegistro.module').then(m => m.ProductosRegistroPageModule)
      },
      {
        path: 'pedidos-registro',
        loadChildren: () => import('../pedidosRegistro/pedidosRegistro.module').then(m => m.PedidosRegistroPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/productos-registro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}

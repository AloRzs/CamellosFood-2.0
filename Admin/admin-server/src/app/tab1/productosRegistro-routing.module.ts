import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosRegistroPage } from './productosRegistro.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosRegistroPage,
  },
  {
    path: 'productos-lista',
    loadChildren: () => import('./productos-lista/productos-lista.module').then( m => m.ProductosListaPageModule)
  },
  {
    path: 'productos-lista/productos-modificar/:id',
    loadChildren: () => import('./productos-modificar/productos-modificar.module').then( m => m.ProductosModificarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRegistroPageRoutingModule {}

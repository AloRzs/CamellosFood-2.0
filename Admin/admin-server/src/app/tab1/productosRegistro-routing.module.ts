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
    loadChildren: () => import('./productos/productos-lista/productos-lista.module').then( m => m.ProductosListaPageModule)
  },
  {
    path: 'productos-lista/productos-modificar/:id',
    loadChildren: () => import('./productos/productos-modificar/productos-modificar.module').then( m => m.ProductosModificarPageModule)
  },
  {
    path: 'categorias-lista',
    loadChildren: () => import('./categorias/categorias-lista/categorias-lista.module').then( m => m.CategoriasListarPageModule)
  },
  {
    path: 'categorias-modificar',
    loadChildren: () => import('./categorias/categorias-modificar/categorias-modificar.module').then( m => m.CategoriasModificarPageModule)
  },
  {
    path: 'productos-agregar',
    loadChildren: () => import('./productos/productos-agregar/productos-agregar.module').then( m => m.ProductosAgregarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRegistroPageRoutingModule {}

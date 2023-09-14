import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosModificarPage } from './productos-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosModificarPageRoutingModule {}

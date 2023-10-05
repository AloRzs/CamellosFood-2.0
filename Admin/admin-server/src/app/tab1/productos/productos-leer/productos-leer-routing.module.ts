import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosLeerPage } from './productos-leer.page';

const routes: Routes = [
  {
    path: '',
    component: ProductosLeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosLeerPageRoutingModule {}

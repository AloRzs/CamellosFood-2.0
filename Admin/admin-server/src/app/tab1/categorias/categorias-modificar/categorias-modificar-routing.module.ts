import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasModificarPage } from './categorias-modificar.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasModificarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasModificarPageRoutingModule {}

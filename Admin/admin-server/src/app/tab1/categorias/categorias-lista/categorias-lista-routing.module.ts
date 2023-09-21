import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriasListaPage } from './categorias-lista.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriasListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriasListaPageRoutingModule {}

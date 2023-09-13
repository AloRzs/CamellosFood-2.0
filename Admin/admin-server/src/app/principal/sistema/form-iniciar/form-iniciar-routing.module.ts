import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormIniciarPage } from './form-iniciar.page';

const routes: Routes = [
  {
    path: '',
    component: FormIniciarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormIniciarPageRoutingModule {}

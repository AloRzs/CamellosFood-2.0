import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRepaPage } from './menu-repa.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRepaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRepaPageRoutingModule {}

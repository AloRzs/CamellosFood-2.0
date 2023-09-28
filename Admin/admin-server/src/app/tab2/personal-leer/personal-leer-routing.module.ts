import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalLeerPage } from './personal-leer.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalLeerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalLeerPageRoutingModule {}

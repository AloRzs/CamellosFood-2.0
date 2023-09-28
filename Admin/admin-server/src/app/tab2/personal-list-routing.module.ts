import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalListPage } from './personal-list.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalListPage,
  },
  {
    path: 'personal-leer/:rut',
    loadChildren: () => import('./personal-leer/personal-leer.module').then( m => m.PersonalLeerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalListPageRoutingModule {}

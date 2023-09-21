import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasModificarPageRoutingModule } from './categorias-modificar-routing.module';

import { CategoriasModificarPage } from './categorias-modificar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasModificarPageRoutingModule
  ],
  declarations: [CategoriasModificarPage]
})
export class CategoriasModificarPageModule {}

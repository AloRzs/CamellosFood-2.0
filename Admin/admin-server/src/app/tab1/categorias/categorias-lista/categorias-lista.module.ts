import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriasListaPageRoutingModule } from './categorias-lista-routing.module';

import { CategoriasListaPage } from './categorias-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasListaPageRoutingModule
  ],
  declarations: [CategoriasListaPage]
})
export class CategoriasListarPageModule {}

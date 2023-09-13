import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormIniciarPageRoutingModule } from './form-iniciar-routing.module';

import { FormIniciarPage } from './form-iniciar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormIniciarPageRoutingModule
  ],
  declarations: [FormIniciarPage]
})
export class FormIniciarPageModule {}

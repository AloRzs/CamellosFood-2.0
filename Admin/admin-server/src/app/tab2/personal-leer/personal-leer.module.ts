import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalLeerPageRoutingModule } from './personal-leer-routing.module';

import { PersonalLeerPage } from './personal-leer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalLeerPageRoutingModule
  ],
  declarations: [PersonalLeerPage]
})
export class PersonalLeerPageModule {}

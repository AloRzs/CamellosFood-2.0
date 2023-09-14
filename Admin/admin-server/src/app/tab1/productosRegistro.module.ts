import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductosRegistroPage } from './productosRegistro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ProductosRegistroPageRoutingModule } from './productosRegistro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ProductosRegistroPageRoutingModule
  ],
  declarations: [ProductosRegistroPage]
})
export class ProductosRegistroPageModule {}

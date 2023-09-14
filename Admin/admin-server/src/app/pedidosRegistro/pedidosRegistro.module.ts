import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PedidosRegistroPage } from './pedidosRegistro.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PedidosRegistroPageRoutingModule } from './pedidosRegistro-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PedidosRegistroPageRoutingModule
  ],
  declarations: [PedidosRegistroPage]
})
export class PedidosRegistroPageModule {}

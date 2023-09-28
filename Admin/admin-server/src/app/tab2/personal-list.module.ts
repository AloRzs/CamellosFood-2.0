import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalListPage } from './personal-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PersonalListPageRoutingModule } from './personal-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PersonalListPageRoutingModule
  ],
  declarations: [PersonalListPage]
})
export class PersonalListPageModule {}

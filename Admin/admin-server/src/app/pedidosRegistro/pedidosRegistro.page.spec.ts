import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PedidosRegistroPage } from './pedidosRegistro.page';

describe('PedidosRegistroPage', () => {
  let component: PedidosRegistroPage;
  let fixture: ComponentFixture<PedidosRegistroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PedidosRegistroPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PedidosRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

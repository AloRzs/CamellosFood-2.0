import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapaPedidosPage } from './mapa-pedidos.page';

describe('MapaPedidosPage', () => {
  let component: MapaPedidosPage;
  let fixture: ComponentFixture<MapaPedidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapaPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

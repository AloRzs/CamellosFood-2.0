import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialPedidosPage } from './historial-pedidos.page';

describe('HistorialPedidosPage', () => {
  let component: HistorialPedidosPage;
  let fixture: ComponentFixture<HistorialPedidosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HistorialPedidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

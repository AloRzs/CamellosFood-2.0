import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TerminarPedidoPage } from './terminar-pedido.page';

describe('TerminarPedidoPage', () => {
  let component: TerminarPedidoPage;
  let fixture: ComponentFixture<TerminarPedidoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TerminarPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

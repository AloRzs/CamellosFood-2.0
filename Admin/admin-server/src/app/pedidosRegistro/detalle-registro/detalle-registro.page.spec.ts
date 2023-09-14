import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleRegistroPage } from './detalle-registro.page';

describe('DetalleRegistroPage', () => {
  let component: DetalleRegistroPage;
  let fixture: ComponentFixture<DetalleRegistroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

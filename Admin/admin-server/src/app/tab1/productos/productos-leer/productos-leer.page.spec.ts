import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosModificarPage } from './productos-leer.page';

describe('ProductosModificarPage', () => {
  let component: ProductosModificarPage;
  let fixture: ComponentFixture<ProductosModificarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosAgregarPage } from './productos-agregar.page';

describe('ProductosAgregarPage', () => {
  let component: ProductosAgregarPage;
  let fixture: ComponentFixture<ProductosAgregarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

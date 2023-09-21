import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosListaPage } from './productos-lista.page';

describe('ProductosListaPage', () => {
  let component: ProductosListaPage;
  let fixture: ComponentFixture<ProductosListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

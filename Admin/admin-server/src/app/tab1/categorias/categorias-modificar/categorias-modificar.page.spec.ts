import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasModificarPage } from './categorias-modificar.page';

describe('CategoriasModificarPage', () => {
  let component: CategoriasModificarPage;
  let fixture: ComponentFixture<CategoriasModificarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriasModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

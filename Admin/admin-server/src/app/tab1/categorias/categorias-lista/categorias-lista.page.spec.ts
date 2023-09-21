import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriasListaPage } from './categorias-lista.page';

describe('CategoriasListaPage', () => {
  let component: CategoriasListaPage;
  let fixture: ComponentFixture<CategoriasListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriasListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormIniciarPage } from './form-iniciar.page';

describe('FormIniciarPage', () => {
  let component: FormIniciarPage;
  let fixture: ComponentFixture<FormIniciarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormIniciarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

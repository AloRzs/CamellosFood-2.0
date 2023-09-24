import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRepaPage } from './menu-repa.page';

describe('MenuRepaPage', () => {
  let component: MenuRepaPage;
  let fixture: ComponentFixture<MenuRepaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuRepaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

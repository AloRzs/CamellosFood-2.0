import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalLeerPage } from './personal-leer.page';

describe('PersonalLeerPage', () => {
  let component: PersonalLeerPage;
  let fixture: ComponentFixture<PersonalLeerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PersonalLeerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

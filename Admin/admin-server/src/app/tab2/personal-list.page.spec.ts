import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PersonalListPage } from './personal-list.page';

describe('PersonalListPage', () => {
  let component: PersonalListPage;
  let fixture: ComponentFixture<PersonalListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalListPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

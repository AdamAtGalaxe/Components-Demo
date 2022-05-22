import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteWithClassesComponent } from './favorite-with-classes.component';

describe('FavoriteWithClassesComponent', () => {
  let component: FavoriteWithClassesComponent;
  let fixture: ComponentFixture<FavoriteWithClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteWithClassesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteWithClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

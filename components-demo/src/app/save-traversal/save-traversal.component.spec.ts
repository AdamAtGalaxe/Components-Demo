import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveTraversalComponent } from './save-traversal.component';

describe('SaveTraversalComponent', () => {
  let component: SaveTraversalComponent;
  let fixture: ComponentFixture<SaveTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveTraversalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

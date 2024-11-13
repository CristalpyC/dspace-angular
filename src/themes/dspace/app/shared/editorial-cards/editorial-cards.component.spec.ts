import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialCardsComponent } from './editorial-cards.component';

describe('EditorialCardsComponent', () => {
  let component: EditorialCardsComponent;
  let fixture: ComponentFixture<EditorialCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorialCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

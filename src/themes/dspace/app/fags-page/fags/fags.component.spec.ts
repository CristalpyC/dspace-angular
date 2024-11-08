import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FagsComponent } from './fags.component';

describe('FagsComponent', () => {
  let component: FagsComponent;
  let fixture: ComponentFixture<FagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

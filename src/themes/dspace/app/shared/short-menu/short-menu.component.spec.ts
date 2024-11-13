import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortMenuComponent } from './short-menu.component';

describe('ShortMenuComponent', () => {
  let component: ShortMenuComponent;
  let fixture: ComponentFixture<ShortMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

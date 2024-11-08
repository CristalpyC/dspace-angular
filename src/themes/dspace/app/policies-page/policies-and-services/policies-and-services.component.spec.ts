import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesAndServicesComponent } from './policies-and-services.component';

describe('PoliciesAndServicesComponent', () => {
  let component: PoliciesAndServicesComponent;
  let fixture: ComponentFixture<PoliciesAndServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliciesAndServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliciesAndServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

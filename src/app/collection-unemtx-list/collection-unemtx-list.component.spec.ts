import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionUnemtxListComponent } from './collection-unemtx-list.component';

describe('CollectionUnemtxListComponent', () => {
  let component: CollectionUnemtxListComponent;
  let fixture: ComponentFixture<CollectionUnemtxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionUnemtxListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CollectionUnemtxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

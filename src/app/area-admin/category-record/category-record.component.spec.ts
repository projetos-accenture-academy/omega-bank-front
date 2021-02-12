import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRecordComponent } from './category-record.component';

describe('CategoryRecordComponent', () => {
  let component: CategoryRecordComponent;
  let fixture: ComponentFixture<CategoryRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryRecordComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

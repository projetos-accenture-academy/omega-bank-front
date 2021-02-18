import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementsFilterComponent } from './statements-filter.component';

describe('StatementsFilterComponent', () => {
  let component: StatementsFilterComponent;
  let fixture: ComponentFixture<StatementsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

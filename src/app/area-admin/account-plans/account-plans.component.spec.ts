import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPlansComponent } from './account-plans.component';

describe('AccountPlansComponent', () => {
  let component: AccountPlansComponent;
  let fixture: ComponentFixture<AccountPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountPlansComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

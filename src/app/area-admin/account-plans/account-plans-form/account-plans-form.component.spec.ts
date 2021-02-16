import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPlansFormComponent } from './account-plans-form.component';

describe('AccountPlansFormComponent', () => {
  let component: AccountPlansFormComponent;
  let fixture: ComponentFixture<AccountPlansFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPlansFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPlansFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

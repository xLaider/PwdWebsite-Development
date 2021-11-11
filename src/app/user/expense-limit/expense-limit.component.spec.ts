import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseLimitComponent } from './expense-limit.component';

describe('ExpenseLimitComponent', () => {
  let component: ExpenseLimitComponent;
  let fixture: ComponentFixture<ExpenseLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

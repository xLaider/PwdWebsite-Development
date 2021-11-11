import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpenseListComponent } from './expense-list.component';

describe('UserExpenseListComponent', () => {
  let component: UserExpenseListComponent;
  let fixture: ComponentFixture<UserExpenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExpenseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

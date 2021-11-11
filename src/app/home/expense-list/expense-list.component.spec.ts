import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpenseListComponent } from './expense-list.component';

describe('HomeExpenseListComponent', () => {
  let component: HomeExpenseListComponent;
  let fixture: ComponentFixture<HomeExpenseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExpenseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExpenseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

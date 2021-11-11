import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIncomeComponent } from './home-income.component';

describe('HomeIncomeComponent', () => {
  let component: HomeIncomeComponent;
  let fixture: ComponentFixture<HomeIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

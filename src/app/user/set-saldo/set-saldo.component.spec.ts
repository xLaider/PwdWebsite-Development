import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSaldoComponent } from './set-saldo.component';

describe('SetSaldoComponent', () => {
  let component: SetSaldoComponent;
  let fixture: ComponentFixture<SetSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

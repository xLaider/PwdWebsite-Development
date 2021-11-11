import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSaldoComponent } from './home-saldo.component';

describe('HomeSaldoComponent', () => {
  let component: HomeSaldoComponent;
  let fixture: ComponentFixture<HomeSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

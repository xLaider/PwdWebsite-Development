import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetProgressComponent } from './target-progress.component';

describe('TargetProgressComponent', () => {
  let component: TargetProgressComponent;
  let fixture: ComponentFixture<TargetProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanapplicationComponent } from './loanapplication.component';

describe('LoanapplicationComponent', () => {
  let component: LoanapplicationComponent;
  let fixture: ComponentFixture<LoanapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanapplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

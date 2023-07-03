import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsandtonditionsComponent } from './termsandtonditions.component';

describe('TermsandtonditionsComponent', () => {
  let component: TermsandtonditionsComponent;
  let fixture: ComponentFixture<TermsandtonditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TermsandtonditionsComponent]
    });
    fixture = TestBed.createComponent(TermsandtonditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

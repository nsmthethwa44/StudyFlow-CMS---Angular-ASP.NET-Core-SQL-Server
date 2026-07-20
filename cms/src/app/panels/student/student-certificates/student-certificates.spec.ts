import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCertificates } from './student-certificates';

describe('StudentCertificates', () => {
  let component: StudentCertificates;
  let fixture: ComponentFixture<StudentCertificates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCertificates],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentCertificates);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

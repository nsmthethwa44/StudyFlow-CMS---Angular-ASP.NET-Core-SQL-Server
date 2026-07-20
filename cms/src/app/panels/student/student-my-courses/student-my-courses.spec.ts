import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMyCourses } from './student-my-courses';

describe('StudentMyCourses', () => {
  let component: StudentMyCourses;
  let fixture: ComponentFixture<StudentMyCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentMyCourses],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentMyCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

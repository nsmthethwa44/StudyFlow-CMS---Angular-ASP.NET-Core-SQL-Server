import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddCourses } from './instructor-add-courses';

describe('InstructorAddCourses', () => {
  let component: InstructorAddCourses;
  let fixture: ComponentFixture<InstructorAddCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorAddCourses],
    }).compileComponents();

    fixture = TestBed.createComponent(InstructorAddCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDiscussions } from './student-discussions';

describe('StudentDiscussions', () => {
  let component: StudentDiscussions;
  let fixture: ComponentFixture<StudentDiscussions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDiscussions],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentDiscussions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, Input, OnInit } from '@angular/core';
import { InstructorAddCourses } from '../instructor-add-courses/instructor-add-courses';
import { Course } from '../../../models/course-model';
import { CourseService } from '../../../services/course-service/course-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-instructor-courses',
  imports: [InstructorAddCourses, CommonModule],
  templateUrl: './instructor-courses.html',
  styleUrl: './instructor-courses.scss',
})
export class InstructorCourses implements OnInit {
  @Input() isVisible = false;
  courses: Course[] = [];
  baseUrl = environment.apiUrl;

  constructor(private courseSvc: CourseService, private cdr: ChangeDetectorRef){}

  // display form 
  showCourseBuilder(){
    this.isVisible = !this.isVisible
  }

  //close form
  closeCourseBuilder(){
    this.isVisible = false;
     this.getCourses();
  }

  ngOnInit(): void {
    this.getCourses();
  }

  // get all logged in instructor courses
  // return error if failed
  getCourses(){
    this.courseSvc.getInstructorCourses().subscribe({
      next: (res) =>{
        this.courses = res;
        this.cdr.detectChanges();
      },
      error: (err)=>{console.log(err)}
    })
  }

  // display corresponding data image 
  displayImage(path: string): string | undefined{
    return (`${this.baseUrl}/${path}`);
  }
}

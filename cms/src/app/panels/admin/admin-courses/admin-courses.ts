import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course-model';
import { CourseService } from '../../../services/course-service/course-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-courses',
  imports: [CommonModule],
  templateUrl: './admin-courses.html',
  styleUrl: './admin-courses.scss',
})
export class AdminCourses implements OnInit {
   courses: Course[] = [];
 constructor(private courseSvc: CourseService, private cdr: ChangeDetectorRef){}

 ngOnInit(): void {
  this.getCourses();
 }

 // get courses
 getCourses(){
  this.courseSvc.getCourses().subscribe({
    next: (res) =>{
      console.log(res);
      this.courses = res;
      this.cdr.detectChanges();
    },
    error: (err) =>{console.log(err)}
  })
 }

}

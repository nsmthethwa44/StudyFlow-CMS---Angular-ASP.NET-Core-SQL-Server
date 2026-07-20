import { Component, OnInit } from '@angular/core';
import { Course } from '../../../models/course-model';
import { CourseService } from '../../../services/course-service/course-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { EnrollService } from '../../../services/enroll-service/enroll-service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-student-catalog',
  imports: [CommonModule],
  templateUrl: './student-catalog.html',
  styleUrl: './student-catalog.scss',
})
export class StudentCatalog implements OnInit {
   courses: Course[] = [];
 baseUrl = environment.apiUrl;
 constructor(private courseSvc: CourseService, private cdr: ChangeDetectorRef, private enrollSvc: EnrollService){}

 ngOnInit(): void {
  this.getCourses();
 }

 // get courses
 getCourses(){
  this.courseSvc.getCourses().subscribe({
    next: (res) =>{
      this.courses = res;
      this.cdr.detectChanges();
    },
    error: (err) =>{console.log(err)}
  })
 }

 displayImage(path: string){
  return (`${this.baseUrl}/${path}`)
 }

 // enroll new course
enroll(courseId: number) {
  Swal.fire({
    title: 'Enrolling...',
    text: 'Please wait while we enroll you in the course.',
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    }
  });

  this.enrollSvc.enroll(courseId).subscribe({
    next: (res) => {
      Swal.fire({
        icon: 'success',
        title: 'Enrollment Successful!',
        text: 'You have successfully enrolled in this course.',
        confirmButtonText: 'Continue'
      });
    },
    error: (err) => {
      Swal.fire({
        icon: 'error',
        title: 'Enrollment Failed',
        text: err.error || 'Something went wrong. Please try again.',
        confirmButtonText: 'OK'
      });
      console.error(err);
    }
  });
}
}

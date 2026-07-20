import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollService } from '../../../services/enroll-service/enroll-service';
import { Enrollment } from '../../../models/enroll-model';
import { environment } from '../../../../environments/environment';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-student-my-courses',
  imports: [CommonModule],
  templateUrl: './student-my-courses.html',
  styleUrl: './student-my-courses.scss',
})
export class StudentMyCourses implements OnInit {
    enrolled: Enrollment[] = []
    baseUrl = environment.apiUrl;
  constructor(private enrollSvc: EnrollService, private cdr: ChangeDetectorRef){};
  
    ngOnInit(): void {
      this.getEnrolled()
  }

  // get my courses
  getEnrolled(){
    this.enrollSvc.getMyCourses().subscribe({
      next: (res) =>{
        this.enrolled = res;
        this.cdr.detectChanges();
      },
      error: (err) =>{console.log(err)}
    })
  }

  displayImage(path: string){
    return (`${this.baseUrl}/${path}`)
  }
}

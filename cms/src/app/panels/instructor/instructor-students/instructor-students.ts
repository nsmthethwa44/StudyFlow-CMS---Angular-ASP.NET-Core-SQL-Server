import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EnrollService } from '../../../services/enroll-service/enroll-service';  
import { InstructorStudent } from '../../../models/enroll-model'; 
import {ChangeDetectorRef} from '@angular/core';  

@Component({
  selector: 'app-instructor-students',
  imports: [CommonModule],
  templateUrl: './instructor-students.html',
  styleUrl: './instructor-students.scss',
})
export class InstructorStudents {
  students: InstructorStudent[] = [];
   constructor(private enrollSvc: EnrollService, private cdr: ChangeDetectorRef) {} 

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.enrollSvc.getMyStudents().subscribe({
      next: (res) => {
        this.students = res;
        this.cdr.detectChanges();   
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}

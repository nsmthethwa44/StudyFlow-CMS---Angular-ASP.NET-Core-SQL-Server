import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../../../services/enroll-service/enroll-service';  
import { InstructorStudent } from '../../../models/enroll-model'; 
import {CommonModule} from '@angular/common'; 
import {ChangeDetectorRef} from '@angular/core';  
import { InstructorDashboardSummary } from '../../../models/dashboard-model';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';

@Component({
  selector: 'app-instructor-overview',
  imports: [CommonModule],
  templateUrl: './instructor-overview.html',
  styleUrl: './instructor-overview.scss',
})
export class InstructorOverview implements OnInit  {
   students: InstructorStudent[] = [];
   summary?: InstructorDashboardSummary;
   constructor(private enrollSvc: EnrollService, private cdr: ChangeDetectorRef, private dashboardSvc: DashboardService) {} 

  ngOnInit(): void {
    this.loadStudents();
    this.loadSummary();
  }

  //students enrolled
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

  //instructor summary
  loadSummary(){
     this.dashboardSvc.getInstructorSummary().subscribe({
    next: (res) => {
      this.summary = res;
       this.cdr.detectChanges();  
    },
    error: (err) => {
        console.error(err);
      }
  });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth-service/auth-service';
import { UserResponse } from '../../../models/User-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { EnrollService } from '../../../services/enroll-service/enroll-service';
import { Enrollment } from '../../../models/enroll-model';
import { environment } from '../../../../environments/environment';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentDashboardSummary } from '../../../models/dashboard-model';
import { DashboardService } from '../../../services/dashboard-service/dashboard-service';

@Component({
  selector: 'app-student-overview',
  imports: [CommonModule, RouterLink],
  templateUrl: './student-overview.html',
  styleUrl: './student-overview.scss',
})
export class StudentOverview implements OnInit{
   loggedInUser!: Observable<UserResponse | null>
    constructor(private authSvc: AuthService, private enrollSvc: EnrollService, private cdr: ChangeDetectorRef, private dashboardSvc: DashboardService){};
    enrolled: Enrollment[] = []
    baseUrl = environment.apiUrl;
    summary?: StudentDashboardSummary;
  
    ngOnInit(): void {
      this.loggedInUser = this.authSvc.currentUser$;
      this.getEnrolled()
      this.loadSummary();
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

  //get student stats
loadSummary() {
  this.dashboardSvc.getStudentSummary().subscribe({
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

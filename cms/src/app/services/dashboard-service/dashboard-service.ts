import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminDashboardSummary, CategoryChart } from '../../models/dashboard-model';
import { InstructorDashboardSummary } from '../../models/dashboard-model';
import { StudentDashboardSummary } from '../../models/dashboard-model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  baseUrl = environment.apiUrl + "/api/dashboard"
  constructor(private http: HttpClient){}

  // admin 
  getSummary(): Observable<AdminDashboardSummary> {
    return this.http.get<AdminDashboardSummary>(`${this.baseUrl}/admin-stats`
    );
  }

  // instructor
  getInstructorSummary(): Observable<InstructorDashboardSummary> {
  return this.http.get<InstructorDashboardSummary>(`${this.baseUrl}/instructor-stats`
  );
}

// student
getStudentSummary(): Observable<StudentDashboardSummary> {
  return this.http.get<StudentDashboardSummary>(`${this.baseUrl}/student-stats`
  );
}

//chart 
getCategories(){
    return this.http.get<CategoryChart[]>(`${this.baseUrl}/course-categories`
    );
}

}

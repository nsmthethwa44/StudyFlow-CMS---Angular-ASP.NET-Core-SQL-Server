import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Enrollment } from '../../models/enroll-model';
import { CreateEnrollment } from '../../models/enroll-model';
import { Observable } from 'rxjs/internal/Observable';
import { InstructorStudent } from '../../models/enroll-model';  

@Injectable({
  providedIn: 'root',
})
export class EnrollService {
  baseUrl = environment.apiUrl + "/api/enrollment";
  constructor(private http: HttpClient){};

  // create new enrollment
enroll(courseId: number): Observable<Enrollment> {
    const body: CreateEnrollment = {
      courseId: courseId
    };
    return this.http.post<Enrollment>(this.baseUrl, body);
  }

    //get student courses
   getMyCourses(): Observable<Enrollment[]> {
    return this.http.get<Enrollment[]>( `${this.baseUrl}/my-courses`
    );
  }

  // get instructor students  
  getMyStudents(): Observable<InstructorStudent[]> {
    return this.http.get<InstructorStudent[]>( `${this.baseUrl}/my-students`);
  }
}

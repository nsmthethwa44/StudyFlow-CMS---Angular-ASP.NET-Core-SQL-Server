import { Injectable } from '@angular/core';
import { CreateCourse } from '../../models/course-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Course } from '../../models/course-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = environment.apiUrl + "/api/course";
  constructor(private http: HttpClient){};

  createCourse(data: FormData){
    return this.http.post<CreateCourse[]>(`${this.baseUrl}/`, data)
  }

  // single instructor courses
  getInstructorCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}/my-courses`)
  }

  // get all courses
  getCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}`)
  }
}

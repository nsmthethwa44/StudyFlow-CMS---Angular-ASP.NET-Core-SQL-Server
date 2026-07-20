import { Component } from '@angular/core';
import { Course } from '../../models/course-model';
import { CourseService } from '../../services/course-service/course-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Login } from '../../auth/login/login';
import { Register } from '../../auth/register/register';
import { HostListener } from '@angular/core';
import { Loader } from '../../components/loader/loader';

@Component({
  selector: 'app-popular-courses',
  imports: [CommonModule, Register, Login, Loader],
  templateUrl: './popular-courses.html',
  styleUrl: './popular-courses.scss',
})
export class PopularCourses {
   courses: Course[] = [];
 baseUrl = environment.apiUrl;
 constructor(private courseSvc: CourseService, private cdr: ChangeDetectorRef){}
  isLoginVisible = false;
 isRegisterVisible = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 80;
  }

 showLogin(){
  this.isLoginVisible = !this.isLoginVisible;
  this.isRegisterVisible = false;
 }

 showRegister(){
  this.isRegisterVisible = true;
  this.isLoginVisible = false
 }

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

 
}

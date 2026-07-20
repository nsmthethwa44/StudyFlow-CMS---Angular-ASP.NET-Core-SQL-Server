import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserRegister, UserResponse } from '../../models/User-model';
import { UserLogin } from '../../models/User-model';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../../models/User-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + "/api/auth";
  private currentUserSource = new BehaviorSubject<UserResponse | null>(this.getUserFromStorage());
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router){}

  //register new user
  register(data: UserRegister){
    return this.http.post<UserRegister[]>(`${this.baseUrl}/register`, data)
  }

  // login 
   login(data: any) {
    return this.http.post<UserResponse>(`${this.baseUrl}/login`, data).pipe(
      map(user => {
        if (user && user.token) {

          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
          this.redirectByRole(user.role.toString())
        }
        return user;
      })
    );
  }

  redirectByRole(role: string) {
  const lowerRole = role.toLowerCase();

  if (lowerRole === 'admin') {
    this.router.navigate(['/admin']);
  } else if (lowerRole === 'student') {
    this.router.navigate(['/student']);
  } else if (lowerRole === 'instructor') {
    this.router.navigate(['/instructor']);
  } else {
    this.router.navigate(['/']);
  }
}

 getUserFromStorage(): UserResponse | null {
    const userJson = localStorage.getItem('user');
    return userJson ? JSON.parse(userJson) : null;
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}

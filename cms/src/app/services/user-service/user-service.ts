import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/User-model';
import { CreateUser } from '../../models/User-model'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    private baseUrl = environment.apiUrl + "/api/User";
  constructor(private http: HttpClient){};

  // get all users
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}`)
  }

  //create new user
  addNewUser(data: CreateUser){
    return this.http.post<CreateUser[]>(`${this.baseUrl}`, data)
  }
}

import { Component, OnInit } from '@angular/core';
import { AdminAddUser } from '../admin-add-user/admin-add-user';
import { User } from '../../../models/User-model';
import { UserService } from '../../../services/user-service/user-service';
import { CommonModule } from '@angular/common';
import { UserRoles } from '../../../models/User-model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-admin-user-management',
  imports: [AdminAddUser, CommonModule],
  templateUrl: './admin-user-management.html',
  styleUrl: './admin-user-management.scss',
})
export class AdminUserManagement implements OnInit{
  isVisible = false;
    users: any[] = [];
    userRole = UserRoles;

  constructor(private userSvc: UserService, private cdr: ChangeDetectorRef){}

  toggleAddUserForm(){
    this.isVisible = !this.isVisible;
  }

// get all users
getUsers() {
    this.userSvc.getUsers().subscribe({
        next: (users) => {
            this.users = [...users];
            this.cdr.detectChanges();
        },
        error: console.error
    });
}

ngOnInit(): void {
  this.getUsers();
}

getUserRole(role: number): string{
  return this.userRole[role];
}
}

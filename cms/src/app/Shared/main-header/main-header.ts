import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service/auth-service';
import { UserResponse } from '../../models/User-model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar-service/sidebar-service';

@Component({
  selector: 'app-main-header',
  imports: [CommonModule],
  templateUrl: './main-header.html',
  styleUrl: './main-header.scss',
})
export class MainHeader implements OnInit{
  loggedInUser!: Observable<UserResponse | null>
  constructor(private authSvc: AuthService, private sidebarSvc: SidebarService){};

  ngOnInit(): void {
    this.loggedInUser = this.authSvc.currentUser$;
    console.log(this.loggedInUser)
}
 
getInitials(name: string): string {
  if (!name) return '';

  return name
    .trim()
    .split(' ')
    .filter(x => x)
    .map(x => x[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

toggleSidebar(){
  this.sidebarSvc.toggleSidebar();
}

}

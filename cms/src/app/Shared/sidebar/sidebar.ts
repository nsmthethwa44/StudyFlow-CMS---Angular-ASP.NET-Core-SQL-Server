import { Component, Input} from '@angular/core';
import { SidebarLinks } from '../../constant/sidebar-links';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service/auth-service';
import { SidebarService } from '../../services/sidebar-service/sidebar-service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  @Input() role: 'admin' | 'instructor' | 'student' = 'student';
    constructor(private authSvc: AuthService, private sidebarSvc: SidebarService){};
  

    get links() {
      return SidebarLinks[this.role] || [];
    }

     logOut(){
    return this.authSvc.logout();
  }

  closeSidebar(){
    this.sidebarSvc.closeSidebar();
  }
}

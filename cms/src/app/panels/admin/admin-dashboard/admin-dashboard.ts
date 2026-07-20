import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../../../Shared/sidebar/sidebar';
import { MainCopyright } from '../../../Shared/main-copyright/main-copyright';
import { MainHeader } from '../../../Shared/main-header/main-header';

@Component({
  selector: 'app-admin-dashboard',
  imports: [Sidebar, MainCopyright, MainHeader, RouterOutlet],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {}

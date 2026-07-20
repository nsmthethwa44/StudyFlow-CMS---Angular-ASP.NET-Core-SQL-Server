import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCopyright } from '../../../Shared/main-copyright/main-copyright';
import { Sidebar } from '../../../Shared/sidebar/sidebar';
import { MainHeader } from '../../../Shared/main-header/main-header';

@Component({
  selector: 'app-student-dashboard',
  imports: [Sidebar, RouterOutlet, MainCopyright, MainHeader],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.scss',
})
export class StudentDashboard {}

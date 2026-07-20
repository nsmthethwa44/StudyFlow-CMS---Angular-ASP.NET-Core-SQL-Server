import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCopyright } from '../../../Shared/main-copyright/main-copyright';
import { MainHeader } from '../../../Shared/main-header/main-header';
import { Sidebar } from '../../../Shared/sidebar/sidebar';

@Component({
  selector: 'app-instructor-dashboard',
  imports: [RouterOutlet, Sidebar, MainCopyright, MainHeader],
  templateUrl: './instructor-dashboard.html',
  styleUrl: './instructor-dashboard.scss',
})
export class InstructorDashboard {}

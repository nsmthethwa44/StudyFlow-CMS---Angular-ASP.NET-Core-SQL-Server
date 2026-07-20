import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AdminDashboard } from './panels/admin/admin-dashboard/admin-dashboard';
import { AdminOverview } from './panels/admin/admin-overview/admin-overview';
import { InstructorDashboard } from './panels/instructor/instructor-dashboard/instructor-dashboard';
import { InstructorOverview } from './panels/instructor/instructor-overview/instructor-overview';
import { StudentDashboard } from './panels/student/student-dashboard/student-dashboard';
import { StudentOverview } from './panels/student/student-overview/student-overview';
import { MainPage } from './pages/main-page/main-page';
import { AdminUserManagement } from './panels/admin/admin-user-management/admin-user-management';
import { AdminCourses } from './panels/admin/admin-courses/admin-courses';
import { AuthGuard } from './auth/guards/auth-guard';
import { InstructorCourses } from './panels/instructor/instructor-courses/instructor-courses';
import { StudentCatalog } from './panels/student/student-catalog/student-catalog';
import { StudentMyCourses } from './panels/student/student-my-courses/student-my-courses';
import { StudentCertificates } from './panels/student/student-certificates/student-certificates';
import { StudentDiscussions } from './panels/student/student-discussions/student-discussions';
import { InstructorStudents } from './panels/instructor/instructor-students/instructor-students';

export const routes: Routes = [
    
    // normally links
    {path: "", component: MainPage, children:[
        {path: "", component: Home},
    ]},


    // admin 
    {path: "admin", component: AdminDashboard, canActivate: [AuthGuard], data: { role: 'Admin' }, children:[
       {path: "", component: AdminOverview},
       {path: "users", component: AdminUserManagement},
       {path: "courses", component: AdminCourses},
    ]},


    // instructor
    {path: "instructor", component: InstructorDashboard, canActivate: [AuthGuard], data: { role: 'Instructor' }, children:[
       {path: "", component: InstructorOverview},
       {path: "course-builder", component: InstructorCourses},
       {path: "my-students", component: InstructorStudents},
    ]},


    // student
    {path: "student", component: StudentDashboard, canActivate: [AuthGuard], data: { role: 'Student' }, children:[
       {path: "", component: StudentOverview},
       {path: "catalog", component: StudentCatalog},
       {path: "my-courses", component: StudentMyCourses},
       {path: "certificates", component: StudentCertificates},
       {path: "discussions", component: StudentDiscussions},
    ]},


    // redirect to home page
    {path: "**", redirectTo: ""},

];

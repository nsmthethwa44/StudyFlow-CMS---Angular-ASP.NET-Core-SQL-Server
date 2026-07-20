//admin
export interface AdminDashboardSummary {
  totalUsers: number;
  publishedCourses: number;
  activeEnrollments: number;
  certificatesIssued: number;
}

//instructor
export interface InstructorDashboardSummary {
  totalStudents: number;
  publishedCourses: number;
  activeEnrollments: number;
  certificatesIssued: number;
}

//students
export interface StudentDashboardSummary {
  activeCourses: number;
  completedCourses: number;
  hoursLearned: number;
  certificates: number;
}

//charts 
export interface CategoryChart{
    category:string;
    totalCourses:number;
}
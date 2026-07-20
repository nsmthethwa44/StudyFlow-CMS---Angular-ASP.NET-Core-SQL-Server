# StudyFlow – Course Management System - (Angular, ASP.NET Core Web API, SQL Server)

StudyFlow is a full-stack, role-based Learning Management System (LMS) that enables administrators, instructors, and students to manage courses, enrollments, learning progress, discussions, and certificates through a modern, scalable platform.

---

## Project Overview:
StudyFlow simulates how modern online learning platforms operate by providing complete course lifecycle management—from course creation and publishing to student enrollment, lesson completion, certification, and analytics. The system emphasizes maintainable architecture, role-based workflows, and real-world business processes.

---

The goal was to build a production-grade learning platform with clean architecture, scalable backend services, secure authentication, and intuitive user experiences.

---

## User Roles & Flows:

### Admin:
- Oversees the entire platform
- Manages users and role assignments
- Creates, updates, and archives courses
- Monitors platform analytics and system activity
- Reviews course performance and enrollment statistics

### Instructor:
- Builds and manages courses
- Creates sections and lessons
- Publishes or updates course content
- Monitors enrolled students and learning progress
- Participates in course discussions

### Student:
- Registers and enrolls in available courses
- Browses the course catalog
- Completes lessons and tracks progress
- Earns certificates upon course completion
- Participates in course discussions
- Views personal learning analytics

---

## Features:
- Role-based authentication and authorization
- Secure JWT authentication
- Course catalog with search and filtering
- Course builder with sections and lessons
- Student enrollment management
- Lesson progress tracking
- Course completion certificates
- Discussion boards for instructors and students
- Dashboard analytics and statistics
- Responsive SPA with protected routes
- User profile management

---

## Tech Stack:

### Frontend
- Angular 20
- TypeScript
- SCSS
- Angular Router
- RxJS
- ApexCharts

### Backend
- ASP.NET Core Web API
- Entity Framework Core
- AutoMapper
- LINQ
- BCrypt Password Hashing

### Database
- SQL Server

### Architecture & Security
- JWT Authentication
- Role-Based Access Control (RBAC)
- Repository Pattern
- Service Layer Pattern

---

## SOLID Principles & Clean Code Practices

### Architecture & Design

The system follows a clean layered architecture with strict separation of concerns:

- Controllers handle HTTP requests and responses
- Services contain business logic and application workflows
- Repositories manage database access
- Entity Framework Core handles persistence
- DTOs define API contracts between frontend and backend
- AutoMapper manages object mapping between entities and DTOs

---

This architecture promotes maintainability, scalability, testability, and ease of future feature development.

---

## Dashboard Overview

### Student Dashboard
- Enrolled courses
- Completed courses
- Learning progress
- Certificates earned
- Recent activity

### Instructor Dashboard
- Courses created
- Total enrolled students
- Active enrollments
- Course completion rates
- Student engagement

### Admin Dashboard
- Total users
- Total students
- Total instructors
- Published courses
- Total enrollments
- Certificates issued
- Platform growth statistics

---

## Project Structure:

- /backend → ASP.NET Core Web API
- /frontend → Angular application
- /database → SQL Server scripts & Entity Framework migrations

---

## Setup & Deployment:

### Frontend Setup

```bash
cd frontend
npm install
ng serve
```

### Backend Setup

```bash
cd backend
dotnet restore
dotnet ef database update
dotnet run
```

### Production Build

```bash
ng build --configuration production
```

---

## Future Enhancements

- Admin creation of course categories and tags  
- Admin management of course approval workflows 
- Student enrollment requests and approvals
- Instructor courses
- Admin and instructor analytics dashboards
- User authentication with 

---

## Links

- Live Demo: [https://studyflowcms.netlify.app/](https://studyflowcms.netlify.app/)
- GitHub Repository: This Repository

---

## Notes

This project was built to demonstrate full-stack software engineering skills using Angular, ASP.NET Core Web API, and SQL Server. It focuses on applying Clean Architecture, SOLID principles, RESTful API design, role-based access control, and scalable application development practices commonly used in enterprise learning management systems.
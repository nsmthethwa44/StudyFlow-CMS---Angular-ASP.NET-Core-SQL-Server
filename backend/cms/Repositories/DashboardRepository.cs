using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.Data;
using cms.DTOs.Dashboard;
using cms.Interfaces.Dashboard;
using Microsoft.EntityFrameworkCore;
using cms.DTOs.Category;

namespace cms.Repositories
{
    public class DashboardRepository : IDashboardRepository 
    {
        private readonly ApplicationDbContext _db;
        public DashboardRepository(ApplicationDbContext db)
        {
            _db = db;
        }

        // admin stats
        public async Task<AdminDashboardSummaryDto> GetSummaryAsync()
        {
            return new AdminDashboardSummaryDto
            {
                TotalUsers = await _db.Users.CountAsync(),
                PublishedCourses = await _db.Courses.CountAsync(),
                ActiveEnrollments = await _db.Enrollments.CountAsync(),

                // until certificates exist
                CertificatesIssued = 0
            };
        }

        //instructor summary
        public async Task<InstructorDashboardSummaryDto> GetInstructorSummaryAsync(int instructorId)
        {
            // var publishedCourses = await _db.Courses
            //     .Where(c => c.InstructorId == instructorId && c.IsPublished)
            //     .CountAsync();
            var publishedCourses = await _db.Courses.CountAsync(c => c.InstructorId == instructorId);
            var activeEnrollments = await _db.Enrollments.CountAsync(e => e.Course.InstructorId == instructorId);
               
            var totalStudents = await _db.Enrollments
                .Where(e => e.Course.InstructorId == instructorId)
                .Select(e => e.StudentId)
                .Distinct()
                .CountAsync();

            return new InstructorDashboardSummaryDto
            {
                TotalStudents = totalStudents,
                PublishedCourses = publishedCourses,
                ActiveEnrollments = activeEnrollments,
                CertificatesIssued = 0
            };
        }

        //student summary
        public async Task<StudentDashboardSummaryDto> GetStudentSummaryAsync(int studentId)
        {
            var activeCourses = await _db.Enrollments.CountAsync(e => e.StudentId == studentId);
            var completedCourses = await _db.Enrollments
                .CountAsync(e =>
                    e.StudentId == studentId &&
                    e.Completed);

            return new StudentDashboardSummaryDto
            {
                ActiveCourses = activeCourses,
                CompletedCourses = completedCourses,

                // Until lessons/videos are implemented
                HoursLearned = 0,

                // Until certificates are implemented
                Certificates = 0
            };
        }

        // get course categories
      public async Task<IEnumerable<CategoryChartDto>> GetCourseCategoriesAsync()
        {
            return await _db.Courses
                .GroupBy(c => c.Category)
                .Select(g => new CategoryChartDto
                {
                    Category = g.Key,
                    TotalCourses = g.Count()
                })
                .OrderByDescending(x => x.TotalCourses)
                .ToListAsync();
        }
    }
}
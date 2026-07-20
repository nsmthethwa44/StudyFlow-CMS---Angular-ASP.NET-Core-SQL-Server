using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.DTOs.Dashboard;
using cms.DTOs.Category;

namespace cms.Interfaces.Dashboard
{
    public interface IDashboardRepository
    {
        Task<AdminDashboardSummaryDto> GetSummaryAsync();
        Task<InstructorDashboardSummaryDto> GetInstructorSummaryAsync(int instructorId);
        Task<StudentDashboardSummaryDto> GetStudentSummaryAsync(int studentId);
        Task<IEnumerable<CategoryChartDto>> GetCourseCategoriesAsync();
    }
}
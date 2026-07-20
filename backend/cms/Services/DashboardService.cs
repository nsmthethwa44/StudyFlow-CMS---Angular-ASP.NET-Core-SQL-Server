using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.DTOs.Dashboard;
using cms.DTOs.Category;
using cms.Interfaces.Dashboard;

namespace cms.Services
{
    public class DashboardService : IDashboardService
    {
        private readonly IDashboardRepository _repo;
        public DashboardService(IDashboardRepository repo)
        {
            _repo = repo;
        }

        // admin service
        public async Task<AdminDashboardSummaryDto> GetSummaryAsync()
        {
            return await _repo.GetSummaryAsync();
        }

        //instructor service
        public async Task<InstructorDashboardSummaryDto> GetInstructorSummaryAsync(int instructorId)
        {
            return await _repo.GetInstructorSummaryAsync(instructorId);
        }

        //student service
        public async Task<StudentDashboardSummaryDto> GetStudentSummaryAsync(int studentId)
        {
            return await _repo.GetStudentSummaryAsync(studentId);
        }

        // admin chart category 
        public async Task<IEnumerable<CategoryChartDto>> GetCourseCategoriesAsync()
        {
            return await _repo.GetCourseCategoriesAsync();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;   
using cms.DTOs.Enrollments; 

namespace cms.Interfaces.Enrollments
{
    public interface IEnrollmentService
    {
        Task <EnrollmentDto> EnrollAsync(int studentId, CreateEnrollmentDto dto); 
        Task<IEnumerable<EnrollmentDto>> GetMyCoursesAsync(int studentId);
        Task<IEnumerable<InstructorStudentDto>> GetMyStudentsAsync(int instructorId);
    }
}
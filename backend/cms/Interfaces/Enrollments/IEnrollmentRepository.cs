using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.Entities; 

namespace cms.Interfaces.Enrollments
{
    public interface IEnrollmentRepository
    {
        Task<bool> ExistAsync(int studentId, int courseId); 
        Task CreateEnrollmentAsync(Enrollment enrollments);
        Task<IEnumerable<Enrollment>> GetStudentEnrollmentsAsync(int studentId);
        Task<IEnumerable<Enrollment>> GetInstructorStudentsAsync(int instructorId);
    }
}
using cms.Data;
using cms.Entities;
using cms.Interfaces.Enrollments;
using Microsoft.EntityFrameworkCore;

namespace cms.Repositories;

public class EnrollmentRepository : IEnrollmentRepository
{
    private readonly ApplicationDbContext _db;
    public EnrollmentRepository(ApplicationDbContext db)
    {
        _db = db;
    }

// check if enrollment exists   
    public async Task<bool> ExistAsync(int studentId, int courseId)
    {
        return await _db.Enrollments.AnyAsync(x =>
            x.StudentId == studentId &&
            x.CourseId == courseId);
    }

// enroll new course
    public async Task CreateEnrollmentAsync(Enrollment enrollment)
    {
        await _db.Enrollments.AddAsync(enrollment);
        await _db.SaveChangesAsync();
    }

// get student enrollments}
    public async Task<IEnumerable<Enrollment>> GetStudentEnrollmentsAsync(int studentId)
    {
        return await _db.Enrollments
            .Include(x => x.Course)
            .Where(x => x.StudentId == studentId)
            .AsNoTracking()
            .ToListAsync();
    }

    // get instructor students  
    public async Task<IEnumerable<Enrollment>> GetInstructorStudentsAsync(int instructorId)
    {
        return await _db.Enrollments
            .Include(e => e.Student)
            .Include(e => e.Course)
            .Where(e => e.Course.InstructorId == instructorId)
            .AsNoTracking()
            .ToListAsync();
    }
}
using cms.Data;
using cms.Entities;
using cms.Interfaces.Courses;
using Microsoft.EntityFrameworkCore;

namespace cms.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly ApplicationDbContext _db;
        public CourseRepository(ApplicationDbContext db) { _db = db; }

        // get all courses
        public async Task<IEnumerable<Course>> GetAllCoursesAsync()
        {
            return await _db.Courses
                .AsNoTracking() .ToListAsync(); 
        }

        // get course by id
        public async Task<Course?> GetCourseByIdAsync(int id)
        {
            return await _db.Courses
                .AsNoTracking().FirstOrDefaultAsync(c => c.Id == id);
        }

        // create courses
        public async Task<Course> CreateCourseAsync(Course course)
        {
            await _db.Courses.AddAsync(course);
            await _db.SaveChangesAsync();   
            return course;  
        }

        // update courses
        public async Task UpdateCourseAsync(Course course)
        {
            _db.Courses.Update(course);
            await _db.SaveChangesAsync();   
        }

        // delete course
        public async Task DeleteCourseAsync(Course course)
        {
            _db.Courses.Remove(course);
            await _db.SaveChangesAsync();
        }

        // if course exist
        public async Task<bool> ExistAsync(int id)
        {
            return await _db.Courses.AnyAsync(c => c.Id == id); 
        }

        // instructor courses
        public async Task<IEnumerable<Course>> GetInstructorCoursesAsync(int instructorId)
        {
            return await _db.Courses
                .Where(c => c.InstructorId == instructorId)
                .AsNoTracking()
                .ToListAsync();
        }
    }
}

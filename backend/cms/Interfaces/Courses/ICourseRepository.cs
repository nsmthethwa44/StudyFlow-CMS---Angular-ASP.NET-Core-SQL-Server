using cms.Entities;

namespace cms.Interfaces.Courses
{
    public interface ICourseRepository
    {
        Task<IEnumerable<Course>> GetAllCoursesAsync();
        Task<Course?> GetCourseByIdAsync(int id);
        Task<Course> CreateCourseAsync(Course course);  
        Task UpdateCourseAsync(Course course);
        Task DeleteCourseAsync(Course course);
        Task<IEnumerable<Course>> GetInstructorCoursesAsync(int instructorId);
        Task<bool> ExistAsync(int id);
    }
}

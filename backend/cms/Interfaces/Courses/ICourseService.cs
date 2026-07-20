using cms.DTOs.Courses;

namespace cms.Interfaces.Courses
{
    public interface ICourseService
    {
        Task<IEnumerable<CourseDto>> GetAllCoursesAsync();
        Task<IEnumerable<CourseDto>> GetMyCoursesAsync(int instructorId);
        Task<CourseDto?> GetByIdAsync(int id);   
        Task<CourseDto> CreateCourseAsync(int instructorId, CreateCourseDto dto);
        Task<CourseDto?> UpdateCourseAsync(UpdateCourseDto dto);
        Task<bool> DeleteCourseAsync(int id);  
    }
}

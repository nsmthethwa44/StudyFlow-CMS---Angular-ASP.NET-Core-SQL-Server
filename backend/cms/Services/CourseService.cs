using AutoMapper;
using cms.Common.Storage.Interface;
using cms.DTOs.Courses;
using cms.Entities;
using cms.Interfaces.Courses;

namespace cms.Services
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _repo;
        private readonly IMapper _mapper;
        private readonly IFileStorageService _storage;

        public CourseService(ICourseRepository repo, IMapper mapper, IFileStorageService storage) {  _repo = repo; _mapper = mapper; _storage = storage; }

        // get all courses
        public async Task<IEnumerable<CourseDto>> GetAllCoursesAsync()
        {
           var courses = await _repo.GetAllCoursesAsync();  
            return _mapper.Map<IEnumerable<CourseDto>>(courses);
        }

        // get by id
        public async Task<CourseDto?> GetByIdAsync(int id)
        {
            var course = await _repo.GetCourseByIdAsync(id);
                if (course == null) { return null; }    
            return _mapper.Map<CourseDto>(course);  
        }

        // create new course
        public async Task<CourseDto> CreateCourseAsync(int instructorId, CreateCourseDto dto)
        {
            var course = _mapper.Map<Course>(dto);

            if (dto.ThumbnailPath != null)
            {
                var upload = await _storage.UploadAsync(
                    dto.ThumbnailPath,
                    "course-thumbnails");
                course.ThumbnailPath = upload.FilePath;
            }

            course.InstructorId = instructorId; 
            course.CreatedAt = DateTime.UtcNow;

            var newCourse = await _repo.CreateCourseAsync(course);
            return _mapper.Map<CourseDto>(newCourse);
        }

        // update course
        public async Task<CourseDto?> UpdateCourseAsync(UpdateCourseDto dto)
        {
            if(!await _repo.ExistAsync(dto.Id))
            {
                return null;
            }

            var course = _mapper.Map<Course>(dto);
            await _repo.UpdateCourseAsync(course);
            return _mapper.Map<CourseDto>(course);
        }

        // delete course
        public async Task<bool> DeleteCourseAsync(int id)
        {
            var course = await _repo.GetCourseByIdAsync(id); // check if the course exist
            if (course == null) { return false; }

            await _repo.DeleteCourseAsync(course);  // delete the course
            return true;
        }

        // get instructor courses
        public async Task<IEnumerable<CourseDto>> GetMyCoursesAsync(int instructorId)
        {
            var courses = await _repo.GetInstructorCoursesAsync(instructorId);
            return _mapper.Map<IEnumerable<CourseDto>>(courses);
        }

    }
}

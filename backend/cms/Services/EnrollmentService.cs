using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.DTOs.Enrollments; 
using cms.Interfaces.Enrollments;
using AutoMapper;   
using cms.Entities; 
using cms.Interfaces.Courses;

namespace cms.Services
{
    public class EnrollmentService : IEnrollmentService
    {
        private readonly IEnrollmentRepository _repo;
        private readonly ICourseRepository _courseRepo;
        private readonly IMapper _mapper;

        public EnrollmentService(
            IEnrollmentRepository repo, ICourseRepository courseRepo, IMapper mapper)
        {
            _repo = repo;
            _courseRepo = courseRepo;
            _mapper = mapper;
        }

        public async Task<EnrollmentDto> EnrollAsync(int studentId, CreateEnrollmentDto dto)
        {
            var course = await _courseRepo.GetCourseByIdAsync(dto.CourseId);

            if (course == null)
                throw new Exception("Course not found.");

            var enrolled = await _repo.ExistAsync(studentId, dto.CourseId);           

            if (enrolled)
                throw new Exception("Already enrolled.");

            var enrollment = new Enrollment
            {
                StudentId = studentId,
                CourseId = course.Id,
                PricePaid = course.Price,
                EnrolledAt = DateTime.UtcNow,
                // Status = EnrollmentStatus.Active
            };

            await _repo.CreateEnrollmentAsync(enrollment);
            enrollment.Course = course;
            return _mapper.Map<EnrollmentDto>(enrollment);
        }

        public async Task<IEnumerable<EnrollmentDto>> GetMyCoursesAsync(int studentId)
        {
            var enrollments =
                await _repo.GetStudentEnrollmentsAsync(studentId);
            return _mapper.Map<IEnumerable<EnrollmentDto>>(enrollments);
        }

        public async Task<IEnumerable<InstructorStudentDto>> GetMyStudentsAsync(int instructorId)
        {
            var enrollments = await _repo.GetInstructorStudentsAsync(instructorId);
            return _mapper.Map<IEnumerable<InstructorStudentDto>>(enrollments);
        }
    }
}
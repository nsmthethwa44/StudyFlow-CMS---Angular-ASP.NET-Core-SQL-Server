using AutoMapper;
using cms.DTOs.Courses;
using cms.Entities;

namespace cms.Profiles
{
    public class CourseProfile : Profile
    {
        public CourseProfile()
        {
            CreateMap<CreateCourseDto, Course>();
            CreateMap<UpdateCourseDto, Course>();
            CreateMap<Course, CourseDto>().ReverseMap();
        }
    }
}
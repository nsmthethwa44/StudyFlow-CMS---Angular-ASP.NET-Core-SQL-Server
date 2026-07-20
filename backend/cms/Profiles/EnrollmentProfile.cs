using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;   
using cms.DTOs.Enrollments; 
using cms.Entities;

namespace cms.Profiles
{
    public class EnrollmentProfile : Profile
    {
        public EnrollmentProfile()  
        {
             CreateMap<Enrollment, EnrollmentDto>()
            .ForMember(d => d.Title,
                o => o.MapFrom(s => s.Course.Title))

                .ForMember(d => d.Description,
                o => o.MapFrom(s => s.Course.Description))

            .ForMember(d => d.ThumbnailPath,
                o => o.MapFrom(s => s.Course.ThumbnailPath));


            // student enrollments  
                CreateMap<Enrollment, InstructorStudentDto>()
                .ForMember(d => d.StudentId,
                    o => o.MapFrom(s => s.Student.Id))

                .ForMember(d => d.FirstName,
                    o => o.MapFrom(s => s.Student.FirstName))

                .ForMember(d => d.LastName,
                    o => o.MapFrom(s => s.Student.LastName))

                .ForMember(d => d.Email,
                    o => o.MapFrom(s => s.Student.Email))

                .ForMember(d => d.PhoneNumber,
                    o => o.MapFrom(s => s.Student.PhoneNumber))

                .ForMember(d => d.Title,
                    o => o.MapFrom(s => s.Course.Title));
                    }   
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms.DTOs.Enrollments
{
    public class InstructorStudentDto
    {
        public int StudentId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public DateTime EnrolledAt { get; set; }
        public decimal PricePaid { get; set; }
    }
}
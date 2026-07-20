using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms.DTOs.Enrollments
{
    public class EnrollmentDto
    {
        public int Id { get; set; }

        public int CourseId { get; set; }

        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;

        public decimal PricePaid { get; set; }
        public string ThumbnailPath { get; set; } = string.Empty;

        public DateTime EnrolledAt { get; set; }
    }
}
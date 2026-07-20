using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms.DTOs.Dashboard
{
    public class StudentDashboardSummaryDto
    {
        public int ActiveCourses { get; set; }
        public int CompletedCourses { get; set; }
        public int HoursLearned { get; set; }
        public int Certificates { get; set; }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms.DTOs.Dashboard
{
    public class AdminDashboardSummaryDto
    {
        public int TotalUsers { get; set; }
        public int PublishedCourses { get; set; }
        public int ActiveEnrollments { get; set; }
        public int CertificatesIssued { get; set; }
    }
}
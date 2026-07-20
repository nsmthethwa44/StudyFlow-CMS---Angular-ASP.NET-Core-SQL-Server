using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace cms.DTOs.Category
{
    public class CategoryChartDto
    {
         public string Category { get; set; } = string.Empty;
        public int TotalCourses { get; set; }
    }
}
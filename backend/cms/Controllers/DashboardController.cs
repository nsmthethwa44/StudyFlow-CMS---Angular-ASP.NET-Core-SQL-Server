using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using cms.Interfaces.Dashboard;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace cms.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DashboardController : ControllerBase
    {
        private readonly IDashboardService _service;
        public DashboardController(IDashboardService service)
        {
            _service = service;
        }

        //admin stats summary
        [HttpGet("admin-stats")]
        public async Task<IActionResult> Summary()
        {
            return Ok(await _service.GetSummaryAsync());
        }

        //instructor stats summary
        [HttpGet("instructor-stats")]
        public async Task<IActionResult> InstructorSummary()
        {
            var instructorId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var summary = await _service.GetInstructorSummaryAsync(instructorId);
            return Ok(summary);
        }

        // student summary
        [HttpGet("student-stats")]
        public async Task<IActionResult> StudentSummary()
        {
            var studentId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var summary =  await _service.GetStudentSummaryAsync(studentId);
            return Ok(summary);
        }

        [HttpGet("course-categories")]
        public async Task<IActionResult> GetCourseCategories()
        {
            var result = await _service.GetCourseCategoriesAsync();
            return Ok(result);
        }
    }
}
using System.Security.Claims;
using cms.DTOs.Enrollments;
using cms.Interfaces.Enrollments;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace cms.Controllers;

[ApiController]
 [Route("api/[controller]")]
public class EnrollmentController : ControllerBase
{
    private readonly IEnrollmentService _service;

    public EnrollmentController(IEnrollmentService service)
    {
        _service = service;
    }

    [HttpPost]
    public async Task<IActionResult> Enroll(CreateEnrollmentDto dto)
    {
        var studentId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
        var result = await _service.EnrollAsync(studentId, dto);
        return Ok(result);
    }

    [HttpGet("my-courses")]
    public async Task<IActionResult> MyCourses()
    {
        var studentId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
        var result = await _service.GetMyCoursesAsync(studentId);
        return Ok(result);
    }

    [HttpGet("my-students")]
    public async Task<IActionResult> GetMyStudents()
    {
        var instructorId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
        var students = await _service.GetMyStudentsAsync(instructorId);
        return Ok(students);
    }
}
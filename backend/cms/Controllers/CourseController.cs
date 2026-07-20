using cms.DTOs.Courses;
using cms.Interfaces.Courses;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace cms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        private readonly ICourseService _service;
        public CourseController (ICourseService service) { _service = service; }

        // get all courses
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CourseDto>>> GetAll()
        {
            var courses = await _service.GetAllCoursesAsync();
            return Ok(courses);
        }

        // get by id
        [HttpGet("{id:int}")]
        public async Task<ActionResult<CourseDto>> GetById(int id)
        {
            var course = await _service.GetByIdAsync(id);
            return Ok(course);
        }

        // create new course
        [HttpPost]
        public async Task<ActionResult<CourseDto>> Create([FromForm] CreateCourseDto dto)
        {
            var claim = User.FindFirst(ClaimTypes.NameIdentifier);
            if (claim == null)
                return Unauthorized("NameIdentifier claim not found.");
            var instructorId = int.Parse(claim.Value);
            var course = await _service.CreateCourseAsync(instructorId, dto);
            return Ok(course);
        }

        // update course
        [HttpPut("{id:int}")]
        public async Task<ActionResult<CourseDto>> Update(int id, UpdateCourseDto dto)
        {
            if (id != dto.Id) return BadRequest();
            var course = await _service.UpdateCourseAsync(dto);
            return Ok(course);  
        }

        // delete course
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<CourseDto>> Delete(int id)
        {
            var delete = await _service.DeleteCourseAsync(id);
            if(!delete) return BadRequest();    
            return Ok(delete);
        }

        // get instructor courses
        [HttpGet("my-courses")]
        public async Task<IActionResult> MyCourses()
        {
            var instructorId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
            var courses = await _service.GetMyCoursesAsync(instructorId);
            return Ok(courses);
        }
    }
}

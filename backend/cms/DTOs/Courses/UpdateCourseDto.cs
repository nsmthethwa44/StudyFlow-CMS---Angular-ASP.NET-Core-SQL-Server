using cms.Entities;

namespace cms.DTOs.Courses
{
    public class UpdateCourseDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ThumbnailPath { get; set; } = string.Empty;
        public string Category {  get; set; } = string.Empty;   
        public decimal Price { get; set; }
        public string Level { get; set; } = string.Empty;
    }
}

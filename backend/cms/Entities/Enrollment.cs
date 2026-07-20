namespace cms.Entities
{
    public class Enrollment
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public User Student { get; set; }
        public int CourseId { get; set; }
        public Course Course { get; set; }
        public decimal PricePaid { get; set; }
        //  public EnrollmentStatus Status { get; set; }
        public DateTime EnrolledAt { get; set; }
        public decimal Progress { get; set; }
        public bool Completed { get; set; }
    }
}

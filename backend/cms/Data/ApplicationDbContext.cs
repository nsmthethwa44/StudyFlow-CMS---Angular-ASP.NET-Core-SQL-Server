using BCrypt.Net;
using cms.Entities;
using cms.Enums;
using Microsoft.EntityFrameworkCore;

namespace cms.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public DbSet<User> Users => Set<User>();
        public DbSet<Course> Courses => Set<Course>();
        public DbSet<Enrollment> Enrollments => Set<Enrollment>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Course>()
             .HasOne(c => c.Instructor)
             .WithMany(u => u.Courses)
             .HasForeignKey(c => c.InstructorId)
             .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Student)
                .WithMany(u => u.Enrollments)
                .HasForeignKey(e => e.StudentId)
                .OnDelete(DeleteBehavior.Restrict);
                
            // modelBuilder.Entity<Enrollment>()
            //     .HasOne(e => e.Course)
            //     .WithMany()
            //     .HasForeignKey(e => e.CourseId)
            //     .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Enrollment>()
                .HasOne(e => e.Course)
                .WithMany(c => c.Enrollments)
                .HasForeignKey(e => e.CourseId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<User>().HasData(
                new User
                {
                    Id = 1,
                    FirstName = "System",
                    LastName = "Admin",
                    Email = "admin@cms.com",
                    PasswordHash = "$2a$11$S58uDifIksZMGzrvDwj.kOhnk5AVJwPR9UIlZVvlti2akAAZcvRz2",
                    PhoneNumber = "0000000000",
                    Role = UserRoles.Admin,
                    IsActive = true,
                    CreatedAt = new DateTime(2026, 1, 1, 0, 0, 0, DateTimeKind.Utc)
                });
        }

       
        
    }
}
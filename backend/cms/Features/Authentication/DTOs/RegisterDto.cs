using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using cms.Enums;

namespace cms.Features.Authentication.DTOs
{
    public class RegisterDto
    {
        public string FirstName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public UserRoles Role { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
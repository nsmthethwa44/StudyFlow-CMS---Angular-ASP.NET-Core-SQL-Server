using cms.DTOs.Users;
using cms.Entities;
using cms.Enums;
using cms.Features.Authentication.DTOs;
using cms.Features.Authentication.Interfaces;
using cms.Interfaces.Users;

namespace cms.Features.Authentication.Service
{
    public class AuthService : IAuthService
    {
        private readonly IUserRepository _repo;
        private readonly IJwtService _jwt;

        public AuthService( IUserRepository repo, IJwtService jwt)
        {
            _repo = repo;
            _jwt = jwt;
        }

// login 
       public async Task<LoginResponseDto?> LoginAsync(LoginDto dto)
        {
            var user = await _repo.GetByEmailAsync(dto.Email);

            if (user == null)
            {
                Console.WriteLine("User not found");
                return null;
            }

            Console.WriteLine($"Email: {user.Email}");
            Console.WriteLine($"Hash: {user.PasswordHash}");

            var validPassword = BCrypt.Net.BCrypt.Verify(dto.Password, user.PasswordHash);

            Console.WriteLine($"Password valid: {validPassword}");

            if (!validPassword)
                return null;

            var token = _jwt.GenerateToken(user);

            return new LoginResponseDto
            {
                Token = token,
                Email = user.Email,
                FullName = $"{user.FirstName} {user.LastName}",
                Role = user.Role.ToString(),
                ExpiresAt = DateTime.UtcNow.AddHours(3)
            };
        }


//register user 
        public async Task<bool> RegisterAsync(RegisterDto dto)
        {
            if (await _repo.EmailExistsAsync(dto.Email))
                return false;

            var user = new User
            {
                FirstName = dto.FirstName,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Role = UserRoles.Student,
                CreatedAt = DateTime.UtcNow,
                IsActive = true
            };

            await _repo.CreateUserAsync(user);
            return true;
        }
    }
}

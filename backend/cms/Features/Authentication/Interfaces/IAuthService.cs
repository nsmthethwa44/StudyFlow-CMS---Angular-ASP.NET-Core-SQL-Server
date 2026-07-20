using cms.DTOs.Users;
using cms.Features.Authentication.DTOs;

namespace cms.Features.Authentication.Interfaces
{
    public interface IAuthService
    {
        Task<LoginResponseDto?> LoginAsync(LoginDto dto);
        Task<bool> RegisterAsync(RegisterDto dto);
    }
}

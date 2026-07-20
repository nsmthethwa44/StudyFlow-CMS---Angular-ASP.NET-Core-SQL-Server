using cms.Entities;

namespace cms.Features.Authentication.Interfaces
{
    public interface IJwtService
    {
        string GenerateToken(User user);
    }
}

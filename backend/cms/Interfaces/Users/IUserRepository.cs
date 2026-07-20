using cms.Entities;

namespace cms.Interfaces.Users
{
    public interface IUserRepository
    {
        Task<IEnumerable<User>> GetAllUsersAsyn();
        Task<User?> GetByIdAsync(int id);
        Task<User> CreateUserAsync(User user);  
        Task UpdateUserAsync( User user);
        Task DeleteUserAsync(User user);
        Task<bool> ExistAsync(int id);

        // auth login & register
        Task<User?> GetByEmailAsync(string email);
        Task<bool> EmailExistsAsync(string email);
    }
}

using cms.Entities;
using cms.DTOs;
using cms.DTOs.Users;

namespace cms.Interfaces.Users
{
    public interface IUserService
    {
        Task<IEnumerable<UserDto>> GetAllUsersAsync();
        Task<UserDto?> GetByIdAsync(int  id);    
        Task<UserDto> CreateNewUserAsync(CreateUserDto dto);   
        Task<UserDto?> UpdateUserAsync(UpdateUserDto dto);
        Task<bool> DeleteUserAsync(int id);
    }
}

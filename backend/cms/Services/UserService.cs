using AutoMapper;
using cms.DTOs.Users;
using cms.Entities;
using cms.Enums;
using cms.Interfaces.Users;

namespace cms.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repo;
        private readonly IMapper _mapper;

        public UserService(IUserRepository repo, IMapper mapper) { _repo = repo;  _mapper = mapper; } 

        // get all users
        public async Task<IEnumerable<UserDto>> GetAllUsersAsync()
        {
            var users = await _repo.GetAllUsersAsyn();
            return _mapper.Map<IEnumerable<UserDto>>(users);  
        }

        // get user by id
        public async Task<UserDto?> GetByIdAsync(int id)
        {
            var user = await _repo.GetByIdAsync(id);
                if (user == null) { return null; } // return nothing if user not found or null
            return _mapper.Map<UserDto?>(user);
        }

        // create new users
        public async Task<UserDto> CreateNewUserAsync(CreateUserDto dto)
        {
            var user = _mapper.Map<User>(dto);
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password);
            user.Role = UserRoles.Instructor;
            user.CreatedAt = DateTime.UtcNow;  
            var created = await _repo.CreateUserAsync(user);
            return _mapper.Map<UserDto>(created);
        }

        // update users
        public async Task<UserDto?> UpdateUserAsync(UpdateUserDto dto)
        {
            // if user id is not found return nothing
            if(!await _repo.ExistAsync(dto.Id)) 
            { 
                return null; 
            }

            // or else update user
            var user = _mapper.Map<User>(dto);
            await _repo.UpdateUserAsync(user);
            return _mapper.Map<UserDto>(user);
        }

        // delete user
        public async Task<bool> DeleteUserAsync(int id)
        {
            var user = await _repo.GetByIdAsync(id); // search user first
            if(user == null) { return false; }  // if user not found return nothing
            await _repo.DeleteUserAsync(user);   // else  delete user 
            return true;  // and return true
        }
    }
}

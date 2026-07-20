using cms.Data;
using cms.Entities;
using cms.Interfaces.Users;
using Microsoft.EntityFrameworkCore;

namespace cms.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _db;
        public UserRepository(ApplicationDbContext db) { _db = db; }


        // get all users
        public async Task<IEnumerable<User>> GetAllUsersAsyn()
        {
            return await _db.Users  
                .AsNoTracking() .ToListAsync(); 
        }

        // get user by id
        public async Task<User?> GetByIdAsync(int id)
        {
            return await _db.Users
                .AsNoTracking().FirstOrDefaultAsync(u => u.Id == id);
        }

        // create new user
        public async Task<User> CreateUserAsync(User user)
        {
            await _db.Users.AddAsync(user);
            await _db.SaveChangesAsync();
            return user;    
        }


        // update user details
        public async Task UpdateUserAsync(User user)
        {
             _db.Users.Update(user);  
            await _db.SaveChangesAsync();
        }

        // delete user
        public async Task DeleteUserAsync(User user)
        {
            _db.Users.Remove(user);
            await _db.SaveChangesAsync();
        }

        // check if user exits
        public async Task<bool> ExistAsync(int id)
        {
            return await _db.Users.AnyAsync(u => u.Id == id);  
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _db.Users
                .FirstOrDefaultAsync(x => x.Email == email);
        }

        public async Task<bool> EmailExistsAsync(string email)
        {
            return await _db.Users
                .AnyAsync(x => x.Email == email);
        }
    }
}

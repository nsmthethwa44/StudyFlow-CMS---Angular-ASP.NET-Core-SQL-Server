using cms.DTOs.Users;
using cms.Interfaces.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace cms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;
        public UserController(IUserService service) { _service = service; }


        // get all users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var users = await _service.GetAllUsersAsync();
            return Ok(users);    
        }

        // get user by id
        [HttpGet("{id:int}")]
        public async Task<ActionResult<UserDto>> GetById(int id)
        {
            var user = await _service.GetByIdAsync(id); 
                if(user == null) {  return NotFound(); }    
            return Ok(user);
        }

        // create new users
        [HttpPost]
        public async Task<ActionResult<UserDto>> Create(CreateUserDto dto)
        {
           var user = await _service.CreateNewUserAsync(dto); 
            return Ok(user);    
        }

        // update user
        [HttpPut("{id:int}")]
        public async Task<ActionResult<UserDto>> Update(int id,  UpdateUserDto dto)
        {
            if(id != dto.Id) return BadRequest();
            var user = await _service.UpdateUserAsync(dto);
            if(user == null) { return NotFound(); } return Ok(user);    
        }

        // delete user
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<UserDto>> Delete(int id)
        {
           var delete = await _service.DeleteUserAsync(id); 
            if(!delete) return NotFound();
            return Ok(delete);
        }
    }
}

using Mng.Core.Entities;
using Mng.Core.IRepositories;
using Mng.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Data.Repositories
{
    public class UserService:IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<User> GetByUserNameAndPaswword(string userName, string password)
        {
            return await _userRepository.GetByUserNameAndPaswword(userName, password);
        }
        public async Task<User> Register(string userName, string password)
        {
            return await _userRepository.Register(userName, password);
        }
    }
}

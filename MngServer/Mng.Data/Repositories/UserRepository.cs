using Microsoft.EntityFrameworkCore;
using Mng.Core.Entities;
using Mng.Core.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Data.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly DataContext _dataContext;
        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public async Task<User> GetByUserNameAndPaswword(string userName, string password)
        {
            return await _dataContext.Users.FirstOrDefaultAsync(u => u.UserName == userName && u.Password==password);
        }

     

        public async Task<User> Register(string userName, string password)
        {
            var userExists = await _dataContext.Users.AnyAsync(u => u.UserName == userName);
            if (userExists)
            {
                throw new Exception("User already exists.");
            }

            var newUser = new User { UserName = userName, Password = password };
            _dataContext.Users.Add(newUser);
            await _dataContext.SaveChangesAsync();
            return newUser;
        }
    }
}

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
  public class RoleRepository : IRoleRepositoy
  {
    private readonly DataContext _dataContext;

    public RoleRepository(DataContext context)
    {
      _dataContext = context;
    }
    public async Task<List<Role>> GetAllRoles()
    {
      return await _dataContext.Roles.Include(e => e.EmployeesInRole).ToListAsync();
    }
  }
}

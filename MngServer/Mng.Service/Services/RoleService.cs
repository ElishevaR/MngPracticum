using Mng.Core.Entities;
using Mng.Core.IRepositories;
using Mng.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Service.Services
{
  public class RoleService : IRoleService
  {
    private readonly IRoleRepositoy _roleRepository;

    public RoleService(IRoleRepositoy employeeRepository)
    {
      _roleRepository = employeeRepository;
    }

    public async Task<List<Role>> GetAllRoles()
    {
      return await _roleRepository.GetAllRoles();
    }
  }
}

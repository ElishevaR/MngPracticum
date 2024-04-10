using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Mng.Core.DTOs;
using Mng.Core.IServices;

namespace Mng.API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class RolesController : ControllerBase
  {
    private readonly IRoleService _roleService;
    private readonly IMapper _mapper;

    public RolesController(IRoleService roleService, IMapper mapper)
    {
      _roleService = roleService;
      _mapper = mapper;
    }
    [HttpGet]
    public async Task<IActionResult> GetRoles()
    {
      var roles = await _roleService.GetAllRoles();
      return Ok(_mapper.Map<IEnumerable<RoleDTO>>(roles));
    }
  }
}

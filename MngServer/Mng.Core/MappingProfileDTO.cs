using AutoMapper;
using Mng.Core.DTOs;
using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core
{
  public class MappingProfileDTO : Profile
  {
    public MappingProfileDTO()
    {
      CreateMap<Employee, EmployeeDTO>().ReverseMap();
      CreateMap<RoleForEmployee, RoleForEmployeeDTO>().ReverseMap();
      CreateMap<Role, RoleDTO>().ReverseMap();
    }
  }
}

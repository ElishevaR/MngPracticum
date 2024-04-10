using AutoMapper;
using Mng.API.Models;
using Mng.Core.Entities;

namespace Mng.API
{
    public class MappingProfileModels:Profile
    {
        public MappingProfileModels()
        {
            CreateMap<EmployeePostAndPutModel, Employee>();
            CreateMap<RoleForEmployeeModel, RoleForEmployee>();
        }

    }
}

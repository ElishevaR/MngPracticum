using Mng.Core.DTOs;
using Mng.Core.Entities;

namespace Mng.API.Models
{
  public class EmployeePostAndPutModel
  {
    public string FName { get; set; }

    public string LName { get; set; }

    public string IdentityNumber { get; set; }

    public DateOnly StartDate { get; set; }

    public DateOnly BirthDate { get; set; }

    public GenderType Gender { get; set; }

    public bool IsActivate { get; set; }
    public IEnumerable<RoleForEmployeeModel> RolesForEmployee { get; set; }


  }
}

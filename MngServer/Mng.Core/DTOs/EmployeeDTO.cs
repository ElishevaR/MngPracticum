using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.DTOs
{
    public class EmployeeDTO
    {
    public int Id { get; set; }

    // [Required(ErrorMessage = "First name is required")]
    public string FName { get; set; }

        public string LName { get; set; }

        //[Required(ErrorMessage = "Identity number is required")]
        public string IdentityNumber { get; set; }

       // [Required(ErrorMessage = "Start date is required")]
        public DateOnly StartDate { get; set; }

       // [Required(ErrorMessage = "Birth date is required")]
        public DateOnly BirthDate { get; set; }
        public GenderType Gender { get; set; }

        public bool IsActivate { get; set; }
    public IEnumerable<RoleForEmployeeDTO> RolesForEmployee { get; set; }
  }
}

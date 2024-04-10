using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Entities
{
    [Table("Employee")]
    public class Employee
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required")]
        [StringLength(50, ErrorMessage = "First name must be less than 50 characters")]
        public string FName { get; set; }

        [Required(ErrorMessage = "Last name is required")]
        [StringLength(50, ErrorMessage = "Last name must be less than 50 characters")]
        public string LName { get; set; }

        [Required(ErrorMessage = "Identity number is required")]
        [RegularExpression(@"^\d{9}$", ErrorMessage = "Identity number must be 9 digits")]
        public string IdentityNumber { get; set; }

        [Required(ErrorMessage = "Start date is required")]
        public DateOnly StartDate { get; set; }

        [Required(ErrorMessage = "Birth date is required")]
        public DateOnly BirthDate { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        public GenderType Gender { get; set; }

        [Required(ErrorMessage = "Activation status is required")]
        public bool IsActivate { get; set; }

        public IEnumerable<RoleForEmployee> RolesForEmployee { get; set; }
    }
    public enum GenderType
    {
        Male,
        Female,
    }
}

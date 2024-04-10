using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Entities
{
    [Table("Role")]
    public class Role
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Description is required")]
        [StringLength(100, ErrorMessage = "Description must be less than 100 characters")]
        public string Description { get; set; }

        public IEnumerable<RoleForEmployee> EmployeesInRole { get; set; }
    }
}

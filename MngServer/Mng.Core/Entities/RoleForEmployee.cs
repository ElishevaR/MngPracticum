using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Entities
{
    [Table("RoleForEmployee")]
    public class RoleForEmployee
    {
        [Key]
        public int Id { get; set; }
        [Required(ErrorMessage = "Start date is required")]
        public DateOnly StartDate { get; set; }

        [Required(ErrorMessage = "Admin status is required")]
        public bool IsAdmin { get; set; }

        public int RoleId { get; set; }
        [ForeignKey(nameof(RoleId))]
        public Role Role { get; set; }

        public int EmployeeId { get; set; }
        [ForeignKey(nameof(EmployeeId))]
        public Employee Employee { get; set; }


    }
}

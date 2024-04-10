using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.DTOs
{
    public class RoleForEmployeeDTO
    {
        public int RoleId { get; set; }
        public DateOnly StartDate { get; set; }
        public bool IsAdmin { get; set; }
  }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.Entities
{ [Table("User")]
    public class User
    {
       
      
            [Key]
            public int Id { get; set; }
            public string UserName { get; set; }
            public string IdentityNumber { get; set; }

    }
}

namespace Mng.API.Models
{
    public class RoleForEmployeeModel
    {
        public int RoleId { get; set; }
        public DateOnly StartDate { get; set; }
        public int EmployeeId { get; set; }
    public bool IsAdmin { get; set; }

  }
}

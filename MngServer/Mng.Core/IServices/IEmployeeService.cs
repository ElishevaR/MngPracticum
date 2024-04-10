using Mng.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Core.IServices
{
  public interface IEmployeeService
  {
    Task<bool> CreateEmployee(Employee employee);
    Task<bool> ChangeEmployeeToNonActivate(int id);
    Task<bool> UpdateEmployee(Employee employee);
    Task<List<Employee>> GetAllEmployees();
    Task<Employee> GetEmployeeById(int id);
  }
}

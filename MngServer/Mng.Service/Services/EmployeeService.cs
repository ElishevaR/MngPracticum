using Mng.Core.Entities;
using Mng.Core.IRepositories;
using Mng.Core.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Service.Services
{
  public class EmployeeService : IEmployeeService
  {
    private readonly IEmployeeRepository _employeeRepository;

    public EmployeeService(IEmployeeRepository employeeRepository)
    {
      _employeeRepository = employeeRepository;
    }
 

    public async Task<bool> CreateEmployee(Employee employee)
    {
      return await _employeeRepository.CreateEmployee(employee);
    }

    public async Task<bool> ChangeEmployeeToNonActivate(int id)
    {
      return await _employeeRepository.ChangeEmployeeToNonActivate(id);
    }

    public async Task<bool> UpdateEmployee(Employee employee)
    {
      return await _employeeRepository.UpdateEmployee(employee);
    }
    public async Task<List<Employee>> GetAllEmployees()
    {
      return await _employeeRepository.GetAllEmployees();
    }
    public async Task<Employee> GetEmployeeById(int id)
    {
      return await _employeeRepository.GetEmployeeById(id);
    }


  }
}

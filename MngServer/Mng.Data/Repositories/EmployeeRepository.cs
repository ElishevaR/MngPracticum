using Microsoft.EntityFrameworkCore;
using Mng.Core.Entities;
using Mng.Core.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mng.Data.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _dataContext;

        public EmployeeRepository(DataContext context)
        {
            _dataContext = context;
        }



        public async Task<bool> CreateEmployee(Employee employee)
        {
            await _dataContext.Employees.AddAsync(employee);
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> ChangeEmployeeToNonActivate(int id)
        {
            var employee = await _dataContext.Employees.FindAsync(id);
            if (employee == null)
            {
                return false;
            }
            employee.IsActivate = false;

            _dataContext.Employees.Update(employee);
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<bool> UpdateEmployee(Employee employee)
        {
            var existEmployee = await GetEmployeeById(employee.Id);
            _dataContext.Entry(existEmployee).CurrentValues.SetValues(existEmployee);
            await _dataContext.SaveChangesAsync();
            return true;
        }

        public async Task<List<Employee>> GetAllEmployees()
        {
            return await _dataContext.Employees.Include(e => e.RolesForEmployee).ToListAsync();
        }
        public async Task<Employee> GetEmployeeById(int id)
        {
            return await _dataContext.Employees.Where(e => e.Id == id).Include(r => r.RolesForEmployee).FirstAsync();
        }

  
    }
}

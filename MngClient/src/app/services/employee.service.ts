import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeeModel } from '../models/employeeModel';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }
  getEmployeesList(): Observable<EmployeeModel[]> {
    return this._http.get<EmployeeModel[]>('https://localhost:7073/api/Employees')
  }
  ChangeEmployeeToNonActivate(id: number){
    return this._http.delete(`https://localhost:7073/api/Employees/id?id=${id}`)
  }
  register(employee: EmployeeModule) {
    return this._http.post('https://localhost:7073/api/Employees/Add_employee', employee);
  }
  updateEmployee(employee:EmployeeModel): Observable<EmployeeModel> {
    return this._http.put<EmployeeModel>(`https://localhost:7073/api/Employees/id?id=${employee.id}`,employee)
  }
  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this._http.get<EmployeeModel>(`https://localhost:7073/api/Employees/id?id=${id}`)
  }
}

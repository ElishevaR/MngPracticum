import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeeModel } from '../models/employeeModel';
import { API_CONFIG } from '../apiConfig';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = API_CONFIG.baseUrl + '/Employees';
  constructor(private _http: HttpClient) { }
  getEmployeesList(): Observable<EmployeeModel[]> {
    return this._http.get<EmployeeModel[]>(`${this.baseURL}`)
  }
  ChangeEmployeeToNonActivate(id: number){
    return this._http.delete(`${this.baseURL}/id?id=${id}`)
  }
  register(employee: EmployeeModule) {
    return this._http.post(`${this.baseURL}/Add_employee`, employee);
  }
  updateEmployee(employee:EmployeeModel): Observable<EmployeeModel> {
    return this._http.put<EmployeeModel>(`${this.baseURL}/id?id=${employee.id}`, employee)
  }
  getEmployeeById(id: number): Observable<EmployeeModel> {
    return this._http.get<EmployeeModel>(`${this.baseURL}/id?id=${id}`)
  }
}

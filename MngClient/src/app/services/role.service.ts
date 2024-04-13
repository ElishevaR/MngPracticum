import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../apiConfig';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private baseURL = API_CONFIG.baseUrl + '/Roles';
  constructor(private _http: HttpClient) { }
  GetRolesLIst(): Observable<RoleModel[]> {
    return this._http.get<RoleModel[]>(`${this.baseURL}`)
  }
}

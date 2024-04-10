import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RoleModel } from '../models/role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private _http: HttpClient) { }
  GetRolesLIst(): Observable<RoleModel[]> {
    return this._http.get<RoleModel[]>('https://localhost:7073/api/Roles')
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';
import { API_CONFIG } from '../apiConfig';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = API_CONFIG.baseUrl + '/Auth';
  constructor(private _http: HttpClient) { }

  login(userName: string, password: string): Observable<LoginResponse> {
    const body = { userName, password };
    return this._http.post<LoginResponse>(`${this.baseUrl}`, body);
  }
  logup(userName: string, password: string): Observable<LoginResponse> {
    const body = { userName, password };
    return this._http.post<LoginResponse>(`${this.baseUrl}/logup`, body);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
 
}

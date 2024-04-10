import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://localhost:7073/api/Auth'; // שנה לכתובת הנכונה של ה-API שלך

  constructor(private _http: HttpClient) { }

  login(userName: string, password: string): Observable<LoginResponse> {
    const body = { userName, password };
    return this._http.post<LoginResponse>(`${this.baseUrl}`, body);
  }
  loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // התנתקות מהאפליקציה (מחיקת הטוקן מ- localStorage)
  logout(): void {
    localStorage.removeItem('token');
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'; // ייבוא Swal עבור התראות

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      return true; // המשתמש מאומת, אפשר גישה
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Authentication Required',
        text: 'Please login to access this route.',
      });
      this.router.navigate(['/login']); // הפנה לדף הכניסה
      return false; // חסום גישה
    }
  }
}
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router) { }

  canActivate(): boolean {
    if (this._userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']); // אם לא מחובר, מעבירים אותו לדף ה-login
      return false;
    }
  }
}

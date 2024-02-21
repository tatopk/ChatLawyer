import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(): boolean {
    // Check if 'token' exists in cookies
    const isLoggedIn = this.cookieService.check('token');
    if (isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
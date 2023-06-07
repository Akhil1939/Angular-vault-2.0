import { CanActivateFn, Router, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/authServices';
  @Injectable({
    providedIn: 'root'
  })
  export class authGuardServiceGuard {
  
    constructor(private authService: AuthService, private router: Router) { }
    
    canActivate(): boolean {
        console.log('authGuardServiceGuard');
      if (!this.authService.isLoggedIn()) {
        console.log('authGuardServiceGuard condition');
        this.router.navigate(['']);
        return false;
      }
      // logged in, so return true
      this.authService.isLoggedIn();
      return true;
    }
  }
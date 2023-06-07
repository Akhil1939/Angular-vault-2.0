import { CanActivateFn, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { AuthService } from '../services/authServices';
import { Observable } from 'rxjs';
import { authchildService } from '../services/authchildServices';

@Injectable()
export class authGuardChildServiceGuard {

  
  constructor(private childService: authchildService, private router: Router) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
   
    console.log('child GuardServiceGuard');

    const bypassPaths = ['child3', 'child11'];

     console.log('child GuardServiceGuard bypass',childRoute.routeConfig?.path ?? '');
    if (bypassPaths.includes(childRoute.routeConfig?.path ?? '')) {
      return true;
    }
    if (!this.childService.isChildAllowed()) {
      console.log('child GuardServiceGuard condition');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
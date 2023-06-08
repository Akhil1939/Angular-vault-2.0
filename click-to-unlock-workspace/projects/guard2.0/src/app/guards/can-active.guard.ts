import { Inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../Services/guard-services/authentication.service';

@Injectable()
export class CanActiveGuardClass {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('auth Guard Service called');
    if (!this.authService.isAuthenticated()) {
      console.log('not authenticated');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

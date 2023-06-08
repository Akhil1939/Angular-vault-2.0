import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthorizationService } from '../Services/guard-services/authorization.service';

@Injectable()
export class CanActivateChildGuardClass {
  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const bypassPaths = ['child1', 'child11'];

    console.log(
      'child GuardService Guard bypass',
      childRoute.routeConfig?.path ?? ''
    );
    if (bypassPaths.includes(childRoute.routeConfig?.path ?? '')) {
      return true;
    }

    console.log('canDeactivateChild Guard Service called');
    if (!this.authorizationService.isAuthorize()) {
      console.log('not authorized');
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

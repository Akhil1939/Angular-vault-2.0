import { Inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthenticationService } from '../Services/guard-services/authentication.service';




export const canMatchGuard: CanMatchFn = (route, segments) => {
  
const service = new AuthenticationService();
  
  return service.isAuthenticated();
};

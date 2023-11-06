import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route);
  if (localStorage.getItem('login') == 'true') {
    
    if (route.routeConfig?.path == localStorage.getItem('role')) {
      return true;
    }
  }
  return false;
};

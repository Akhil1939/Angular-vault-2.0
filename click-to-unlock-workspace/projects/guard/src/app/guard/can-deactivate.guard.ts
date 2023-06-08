import { CanActivateFn } from '@angular/router';


export const canDeactivateGuard: CanActivateFn = (route, state) => {

  if(!false){
    console.log('canDeactivateGuard', route, state);

    if(confirm("Are you sure you want to navigate away?")){
      return true;
    }
    return false;
  }
  return false;
};

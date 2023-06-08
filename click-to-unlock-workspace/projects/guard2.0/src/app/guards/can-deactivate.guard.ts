import { Inject, Injectable } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ConformDeactivationService } from '../Services/guard-services/conform-deactivation.service';


@Injectable()

export class CanDeactivateClass{
  constructor(private conformDeactivationService: ConformDeactivationService){}
  canDeactivate():boolean{
    if(!this.conformDeactivationService.canDeactivate()){

      if(confirm("Are you sure you want to navigate away?")){
        return true;
      }
      return false;
    }
    return true;
  }
}



// class CanDeactivateClass{
//   constructor(private conformDeactivationService: ConformDeactivationService){}
//   canDeactivate():boolean{
//     return this.conformDeactivationService.canDeactivate();
//   }
// }


// export const canDeactivateGuard: CanDeactivateFn<boolean> = (component, currentRoute, currentState, nextState) => {
//   console.log("can deactivated called")
  
//   if(Inject(CanDeactivateClass).canDeactivate()){

//     if(confirm("Are you sure you want to navigate away?")){
//       return true;
//     }
//     return false;
//   }
//   return false;
// };

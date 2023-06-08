import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConformDeactivationService {

  constructor() { }

  canDeactivate():boolean{
    return true;
  }
}

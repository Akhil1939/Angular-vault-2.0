import { Injectable } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthCanMatchService } from '../services/authCanMatch.services';


@Injectable({
  providedIn: 'root'
})
export class CanMatchGuardService {
  constructor(private canMAtch:AuthCanMatchService ) {}

  canMatchGuard: CanMatchFn = (route, segments) => {
    // Access the injected service and perform necessary operations
    this.canMAtch.isMatchAllowed();

    return true;
  };
}
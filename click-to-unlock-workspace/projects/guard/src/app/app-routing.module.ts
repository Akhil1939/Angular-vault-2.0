import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuardServiceGuard } from './guard/auth-guard-service.guard';
import { ChildComponent } from './child/child.component';
import { authGuardChildServiceGuard } from './guard/can-activate-child.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuardServiceGuard],
    canActivateChild:[authGuardChildServiceGuard],
    children:[
      {
        path:'child',
        component:ChildComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

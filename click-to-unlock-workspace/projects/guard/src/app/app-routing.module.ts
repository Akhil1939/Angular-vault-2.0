import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuardServiceGuard } from './guard/auth-guard-service.guard';
import { ChildComponent } from './child/child.component';
import { authGuardChildServiceGuard } from './guard/can-activate-child.guard';
import { FormComponent } from './form/form.component';
import { canDeactivateGuard } from './guard/can-deactivate.guard';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child11Component } from './child11/child11.component';

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
      },
      {
        path:'child1',
        component:Child1Component,
        children:[
          {
            path:'child11',
            component:Child11Component,
          }
        ]
      },
      {
        path:'child2',
        component:Child2Component,
      }
    ]
  },
  {
    path:'form',
    component:FormComponent,
    canDeactivate:[canDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

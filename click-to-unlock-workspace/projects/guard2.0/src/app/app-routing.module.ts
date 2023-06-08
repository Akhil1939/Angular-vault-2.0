
import { Child2Component } from './Component/child2/child2.component';
import { Child11Component } from './Component/child11/child11.component';
import { Child1Component } from './Component/child1/child1.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanMatchFn } from '@angular/router';
import { CanActiveGuardClass } from './guards/can-active.guard';
import { CanActivateChildGuardClass } from './guards/can-activate-child.guard';
import { FormComponent } from './Component/form/form.component';
import {CanDeactivateClass} from './guards/can-deactivate.guard'
import { Admin1Component } from './Component/admin1/admin1.component';
import { Admin2Component } from './Component/admin2/admin2.component';
import { canMatchGuard } from './guards/can-match.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    canActivate:[CanActiveGuardClass],
    canActivateChild:[CanActivateChildGuardClass],
    children:[
      {
        path:'child1',
        component:Child1Component,
        children:[
          {
            path:'child11',
            component:Child11Component
          }
        ]
      },
      {
        path:'child2',
        component:Child2Component
      }
    ]
  },
  {
    path:'form',
    component:FormComponent,
  canDeactivate:[CanDeactivateClass]
  },
{
  path:'admin',
  component:Admin1Component,
  canMatch:[canMatchGuard],
},
{
  path:'admin',
canMatch:[()=> true],
component:Admin2Component,
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

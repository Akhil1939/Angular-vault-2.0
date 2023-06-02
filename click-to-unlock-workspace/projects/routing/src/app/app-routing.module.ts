import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutTeamComponent } from './about/about-team/about-team.component';

const routes: Routes = [
  {
    path:"/",
    component:HomeComponent
  },
  {
    path:'/about',
    component:AboutComponent,
    children:[
      {
        path:'company',
        component:AboutCompanyComponent
      },
      {
        path:'team',
        component:AboutTeamComponent
      }
    ]
  },
  {

    path:'/login',
    component:LoginComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { authGuardServiceGuard } from './auth-guard-service.guard';

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
    canActivate:[authGuardServiceGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

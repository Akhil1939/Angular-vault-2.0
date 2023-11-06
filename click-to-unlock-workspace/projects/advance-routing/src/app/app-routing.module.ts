import { authGuard } from './../gards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'admin',
    canActivate:[authGuard],
    loadChildren : ()=> import('../modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',
    canActivate:[authGuard],
    loadChildren : ()=> import('../modules/user/user.module').then(m=>m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

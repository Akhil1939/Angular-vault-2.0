import { CustomerModule } from './../modules/customer/customer.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../modules/home/home.module';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('../modules/customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
  }, 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

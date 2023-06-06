import { EmployeeUpsertComponent } from '../app/employee-upsert/employee-upsert.component'
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    component:EmployeeListComponent
  },
  {
    path:'employee/:id',
    component:EmployeeUpsertComponent
  },
  {
    path:'employee/add',
    component:EmployeeUpsertComponent
  },
  {
    path:'**',
    redirectTo:'/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

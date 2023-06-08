import { CanDeactivateFn } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { HomeComponent } from './Component/home/home.component';
import { Child1Component } from './Component/child1/child1.component';
import { Child2Component } from './Component/child2/child2.component';
import { Child11Component } from './Component/child11/child11.component';
import { CanActiveGuardClass } from './guards/can-active.guard';
import { CanActivateChildGuardClass } from './guards/can-activate-child.guard';
import { FormComponent } from './Component/form/form.component';

import { ConformDeactivationService } from './Services/guard-services/conform-deactivation.service';
import { CanDeactivateClass } from './guards/can-deactivate.guard';
import { Admin1Component } from './Component/admin1/admin1.component';
import { Admin2Component } from './Component/admin2/admin2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Child1Component,
    Child2Component,
    Child11Component,
    FormComponent,
    Admin1Component,
    Admin2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CanActiveGuardClass, CanActivateChildGuardClass, CanDeactivateClass],
  bootstrap: [AppComponent]
})
export class AppModule { }

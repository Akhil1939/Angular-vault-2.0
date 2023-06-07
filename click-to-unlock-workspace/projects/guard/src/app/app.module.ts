
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authGuardServiceGuard } from './guard/auth-guard-service.guard';
import { AuthService } from './services/authServices';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { authGuardChildServiceGuard } from './guard/can-activate-child.guard';
import { authchildService } from './services/authchildServices';
import { FormComponent } from './form/form.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child11Component } from './child11/child11.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildComponent,
    FormComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,authGuardChildServiceGuard, authchildService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

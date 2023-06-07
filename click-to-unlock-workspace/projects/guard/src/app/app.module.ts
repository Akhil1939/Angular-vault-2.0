
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService,authGuardChildServiceGuard, authchildService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

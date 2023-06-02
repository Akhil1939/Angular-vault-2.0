import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about/about-company/about-company.component';
import { AboutTeamComponent } from './about/about-team/about-team.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,

    NotFoundComponent,
     AboutCompanyComponent,
     AboutTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

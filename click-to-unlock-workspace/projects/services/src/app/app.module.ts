import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerListComponent } from './server-list/server-list.component';
import { AddServerComponent } from './add-server/add-server.component';
import { ServerServices } from './Services/serverListUpsert.service';
import { LoggerService } from './Services/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerListComponent,
    AddServerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServerServices,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

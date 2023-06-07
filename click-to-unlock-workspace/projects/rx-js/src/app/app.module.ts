import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { FromEventOperatorComponent } from './from-event-operator/from-event-operator.component';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';

@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventOperatorComponent,
    IntervalOperatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

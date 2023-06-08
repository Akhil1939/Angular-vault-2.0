import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { FromEventOperatorComponent } from './from-event-operator/from-event-operator.component';
import { IntervalOperatorComponent } from './interval-operator/interval-operator.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { SearchComponent } from './debounce-time/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventOperatorComponent,
    IntervalOperatorComponent,
    DebounceTimeComponent,
    SearchComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

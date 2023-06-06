import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './fields/text-input/text-input.component';
import { EmailInputComponent } from './fields/email-input/email-input.component';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule , FormControl} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    EmailInputComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
 
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

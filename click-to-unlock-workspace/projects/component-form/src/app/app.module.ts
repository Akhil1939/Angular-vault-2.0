import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextInputComponent } from './fields/text-input/text-input.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core'
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { ReactiveFormsModule , FormControl} from '@angular/forms';
import { DropdownComponent } from './fields/dropdown/dropdown.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatePickerComponent } from './fields/date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    DropdownComponent,
    DatePickerComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
 MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

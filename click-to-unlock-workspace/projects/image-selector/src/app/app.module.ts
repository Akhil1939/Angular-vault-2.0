import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSelectorComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

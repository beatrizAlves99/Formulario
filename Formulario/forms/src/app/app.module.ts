import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { NgForms } from '@angular/forms'


import { AppComponent } from './app.component';
import { EmailFormsComponent } from './email-forms/email-forms.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

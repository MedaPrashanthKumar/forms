import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';//step-1 Import ReactiveFormsModule to implement Reactive Forms
import { TemplateComponent } from './template/template.component'; //step-1: first import forms module to implement template driven forms

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ReactiveComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

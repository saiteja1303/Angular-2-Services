import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule}      from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { SubComponent }   from './sub.component';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDetailsComponent } from './employee-details.component';
@NgModule({
  imports:      [ BrowserModule , FormsModule, HttpModule],
  declarations: [ AppComponent ,SubComponent, EmployeeListComponent, EmployeeDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

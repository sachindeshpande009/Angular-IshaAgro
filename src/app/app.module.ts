import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginModule } from './login/login.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddstateComponent } from './addstate/addstate.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DashboardComponent,
    AddstateComponent
    
  ],
  imports: [
    BrowserModule,
    LoginModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }

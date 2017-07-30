import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PermissionsDirective } from './directives/permissions.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientSummaryComponent } from './components/patient-summary/patient-summary.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NewPrescriptionComponent } from './components/new-prescription/new-prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PermissionsDirective,
    DashboardComponent,
    NavbarComponent,
    PatientSummaryComponent,
    AppointmentComponent,
    NewPrescriptionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

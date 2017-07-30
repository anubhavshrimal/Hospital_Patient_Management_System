import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NewPrescriptionComponent } from "./components/new-prescription/new-prescription.component";
import { PatientSummaryComponent } from './components/patient-summary/patient-summary.component';
import { SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/login',
    //     pathMatch: 'full'
    // },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'patient-summary/:uname',
        component: PatientSummaryComponent
    },
    {
        path: 'prescription/:recordId',
        component: NewPrescriptionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
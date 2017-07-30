import { Component, OnInit } from '@angular/core';
import{GetService} from "../../services/get.service"
import {PatientLogin} from './login'
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[GetService]
})
export class LoginComponent implements OnInit {

  patientlogin:PatientLogin;
  constructor(private getservice:GetService) {
    this.patientlogin=new PatientLogin();
  }
  submit(){
    this.getservice.login(this.patientlogin)
  }

  ngOnInit() {
  }

}

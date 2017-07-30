import { Component, OnInit } from '@angular/core';
import{GetService} from "../../services/get.service"
import {PatientLogin} from './login'
import {PostService} from "../../services/post.service";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PostService]
})
export class LoginComponent implements OnInit {
  found:boolean;
  patientlogin:PatientLogin;
  constructor(private postservice:PostService) {
    this.patientlogin=new PatientLogin();
    this.found=true;
  }
  submit(){
    this.postservice.login(this.patientlogin).subscribe(data=>this.loginresponse(data));
  }
  loginresponse(data:any){
    var token:any;
    if(token=='error'){
      this.found=false;
    }
    else {
      token = data._body;
    }
  }

  ngOnInit() {
  }

}

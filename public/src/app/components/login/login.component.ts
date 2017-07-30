import { Component, OnInit } from '@angular/core';
import{GetService} from "../../services/get.service"
import {AuthenticateUserService} from "../../services/authenticate-user.service"
import {PatientLogin} from './login'
import {PostService} from "../../services/post.service";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PostService,AuthenticateUserService]
})
export class LoginComponent implements OnInit {
  found:boolean;
  userType:any;
  userlogin:PatientLogin;
  constructor(private postservice:PostService,private auth:AuthenticateUserService) {
    this.userlogin=new PatientLogin();
    this.found=true;
      }
  submit(){
    console.log(this.userlogin)

    this.postservice.login(this.userlogin).subscribe(data=>this.loginresponse(data));
  }
  loginresponse(data:any){
    var data1=data._body;
    if(data1=='error'){
      this.found=false;
    }
    else {
      var utype=data1.userType;
      var token=data1.token;

      this.auth.changeUser({'userType': utype})
      localStorage.setItem('userData', 'data1');

    }
  }

  ngOnInit() {
  }

}

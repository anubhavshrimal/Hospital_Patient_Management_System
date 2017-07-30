import { Component, OnInit } from '@angular/core';
import{GetService} from "../../services/get.service";
import {PatientLogin} from './login';
import {PostService} from "../../services/post.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[PostService]
})
export class LoginComponent implements OnInit {
  found:boolean;
  userType:any;
  userlogin:PatientLogin;
  constructor(private postservice:PostService, private router:Router) {
    this.userlogin=new PatientLogin();
    this.found=true;
      }
  submit(){
    console.log(this.userlogin)

    this.postservice.login(this.userlogin).subscribe(data=>this.loginresponse(data));
  }
  loginresponse(data:any){
    var data1=JSON.parse(data._body);
    console.log(data1)
    if(data1.message=='error'){
      this.found=false;
    }
    else {
      // console.log(data1)
      var utype=data1.userType;
      var token=data1.token;
      console.log(utype)
      localStorage.setItem('userData', JSON.stringify(data1));
      this.router.navigate([`/home`]);
    }
  }

  ngOnInit() {
  }

}

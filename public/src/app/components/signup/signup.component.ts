import { Component, OnInit } from '@angular/core';
import {stringDistance} from "codelyzer/util/utils";
import {FormData} from "./patient"
import {PostService} from "../../services/post.service";
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers :[PostService]
})
export class SignupComponent {
  formData: FormData;
  help:string;
  validated:boolean;

  constructor(private postservice:PostService) {
    this.formData = new FormData();
    this.help='hello';
    this.validated=true;

  }

  submit() {
    var e=(<HTMLInputElement>(document.getElementById('maritialstatus'))).value;
    if(e=='true'){this.formData.maritalStatus=true}
    else{this.formData.maritalStatus=false}
    this.formData.gender=(<HTMLInputElement>(document.getElementById('gender'))).value;
    this.formData.name.title=(<HTMLInputElement>(document.getElementById('title'))).value;
    if (this.formData.name.firstName != '') {
      if (this.formData.name.lastName != '') {
        if (this.formData.name.title != '') {
          if (this.formData.password != '') {
            if (this.formData.userName != '') {
              if (this.formData.gender != '') {
                if (this.formData.email != '') {
                  if (this.formData.contacts.mobile != null) {
                    if (this.formData.age != null) {
                      this.validated=true;
                    }
                  }
                }

              }
            }
          }
        }
      }
    }
    else{
      this.validated=false;
      alert('fill all details')
    }
    if(this.validated) {
      this.postservice.postdetails(this.formData).subscribe(data => console.log(data));
    }

  }
}

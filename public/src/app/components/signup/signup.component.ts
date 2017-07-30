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

  constructor(private postservice:PostService) {
    this.formData = new FormData();
    this.help='hello'
  }

  submit() {
    var e=(<HTMLInputElement>(document.getElementById('maritialstatus'))).value;
    if(e=='true'){this.formData.maritalStatus=true}
    else{this.formData.maritalStatus=false}
    this.formData.gender=(<HTMLInputElement>(document.getElementById('gender'))).value;
    this.formData.patientDetails.title=(<HTMLInputElement>(document.getElementById('title'))).value;
    if (this.formData.patientDetails.firstName != '') {
      if (this.formData.patientDetails.lastName != '') {
        if (this.formData.patientDetails.title != '') {
          if (this.formData.password != '') {
            if (this.formData.userName != '') {
              if (this.formData.gender != '') {
                if (this.formData.email != '') {
                  if (this.formData.contactDetails.mobile != null) {
                    if (this.formData.age != null) {
                    }
                  }
                }

              }
            }
          }
        }
      }
    }
    console.log(this.formData);
    this.postservice.postdetails(this.formData);

  }
}

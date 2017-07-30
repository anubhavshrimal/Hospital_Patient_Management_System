import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import {GetService} from "../../services/get.service"
import {PostService} from "../../services/post.service"
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[GetService,PostService],
})
export class DashboardComponent implements OnInit {
  private today: any;
  private adate:any;
  private symptom: string;
  private symptoms:any;
  private symptomsArr: Array<string>;
  private userData:Object;

  constructor(private getservice:GetService,private postservice:PostService) {
    this.findTodaysDate();
    this.symptomsArr = [];
    this.getservice.getSymptoms().subscribe(data=>this.fetchSymptoms(data));
  }
  fetchSymptoms(data:any){
    var data1=(JSON.parse(data._body));
    this.symptoms=data1;

  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

  applyLeave() {

  }

  bookAppointment() {
     this.postservice.bookappointment(this.adate,this.symptomsArr).subscribe();
  }

  addSymptom(): void {
    console.log(this.symptomsArr)
    if (this.symptom.length != 0) {
      this.symptom = this.symptom.toLowerCase();
      for (let i in this.symptomsArr) {
        if (this.symptomsArr[i] === this.symptom)
          return
      }
      this.symptomsArr.push(this.symptom);
      this.symptom = "";
    }
  }

  removeSymptom(symptom: string): void {
    _.remove(this.symptomsArr, function (n) {
      return n === symptom;
    });
  }

  findTodaysDate() {
    let mm: any;
    let dd: any;

    this.today = new Date();
    dd = this.today.getDate();
    mm = this.today.getMonth() + 1; //January is 0!

    let yyyy = this.today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }

    this.today = yyyy + '-' + mm + '-' + dd;
  }
}

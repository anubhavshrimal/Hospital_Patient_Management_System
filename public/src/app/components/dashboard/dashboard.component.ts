import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private docsList: Array<Object>;

  constructor(private getservice:GetService,private postservice:PostService, private router: Router) {
    this.findTodaysDate();
    this.symptomsArr = [];
    this.docsList = [];
    this.getservice.getSymptoms().subscribe(data=>this.fetchSymptoms(data));

    this.getservice.getDoctor().subscribe(data=>this.doctordata(data));
  }
  fetchSymptoms(data:any){
    var data1=(JSON.parse(data._body));
    this.symptoms=data1;

  }
  
  doctordata(data:any){
    var data1=JSON.parse(data._body);
    console.log(data1);
    for(var i in data1){
      console.log(data1[i].userName)
      this.docsList.push({"name": data1[i].name.title+' '+data1[i].name.firstName+' '+data1[i].name.lastName,
                          "specialization": data1[i].specialization.name})
    }
    console.log(this.docsList)
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

  applyLeave() {

  }

  patienSummary(){
    this.router.navigate([`/patient-summary/raghusingh`]);
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

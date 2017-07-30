import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private today: any;
  private symptom: string;
  private symptomsArr: Array<string>;
  constructor() {
    this.findTodaysDate();
    this.symptomsArr = [];
  }

  ngOnInit() {

  }

  applyLeave() {

  }

  bookAppointment() {

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

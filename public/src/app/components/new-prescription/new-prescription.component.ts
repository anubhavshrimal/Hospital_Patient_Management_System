import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-new-prescription',
  templateUrl: './new-prescription.component.html',
  styleUrls: ['./new-prescription.component.css']
})
export class NewPrescriptionComponent implements OnInit {
  private symptom: string;
  private medicine: string;
  private test: string;

  private symptomsArr: Array<string>;
  private medicinesArr: Array<string>;
  private testsArr: Array<string>;
  constructor() {
    this.symptomsArr = [];
    this.medicinesArr = [];
    this.testsArr = [];
  }

  ngOnInit() {
  }

  addSymptom(): void {
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

  addMedicine(): void {
    if (this.medicine.length != 0) {
      this.medicine = this.medicine.toLowerCase();
      for (let i in this.medicinesArr) {
        if (this.medicinesArr[i] === this.medicine)
          return
      }
      this.medicinesArr.push(this.medicine);
      this.medicine = "";
    }
  }

  removeMedicine(medicine: string): void {
    _.remove(this.medicinesArr, function (n) {
      return n === medicine;
    });
  }

  addTest(): void {
    if (this.test.length != 0) {
      this.test = this.test.toLowerCase();
      for (let i in this.testsArr) {
        if (this.testsArr[i] === this.test)
          return
      }
      this.testsArr.push(this.test);
      this.test = "";
    }
  }

  removeTest(test: string): void {
    _.remove(this.testsArr, function (n) {
      return n === test;
    });
  }

}

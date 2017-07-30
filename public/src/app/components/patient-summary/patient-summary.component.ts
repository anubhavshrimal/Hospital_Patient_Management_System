import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {GetService} from "../../services/get.service"

@Component({
  selector: 'patient-summary',
  templateUrl: './patient-summary.component.html',
  styleUrls: ['./patient-summary.component.css'],
  providers:[GetService]
})
export class PatientSummaryComponent implements OnInit {
  summary:any;
  constructor(private route: ActivatedRoute,private get:GetService) { }

  ngOnInit() {
    this.getPatientSummary()
  }

  getPatientSummary(): void {
    this.get.getPatient().subscribe(data=>this.fetchedData(data))
  }
  fetchedData(data:any){
    console.log(data._body);
    this.summary=JSON.parse(data._body);
  }
}

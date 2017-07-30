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
  constructor(private route: ActivatedRoute,private get:GetService) {
    this.summary = {
        "_id": "597db3e7f3c3d006b3570cd1",
        "userName": "raghusingh",
        "password": "c7233c0edb",
        "email": "abc@aa.com",
        "gender": "M",
        "diseases": ['Diabetes', 'Asthma'],
        "age": 21,
        "userType": "p",
        "nationality": "indian",
        "maritalStatus": true,
        "displayPicture": "12e23ce8dec0add0ec71cd6f41ee645f",
        "records": [
            {
                "prescriptions": [
                    {
                        "date": "20/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "12/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "27/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record1"
            },
            {
                "prescriptions": [
                    {
                        "date": "24/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "22/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "28/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record2"
            },
            {
                "prescriptions": [
                    {
                        "date": "20/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "12/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "27/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record2"
            }
        ],
        "__v": 1,
        "appointments": [
            {
                "_id": "597dba87e31d3e7bc1840c0f",
                "doctorId": "597db4b1b78df571a3dd4f38",
                "patientId": "597db3e7f3c3d006b3570cd1",
                "date": "2017-07-31T00:00:00.000Z",
                "time": 1501396200000,
                "status": "active",
                "__v": 0,
                "symptoms": [
                    "cardio",
                    "fracture"
                ]
            }
        ],
        "characteristics": {
            "idMarks": [],
            "disabilities": []
        },
        "chronicDiseases": [],
        "allergies": [],
        "verified": false,
        "isAlive": true,
        "contacts": {
            "mobile": 774111111
        },
        "name": {
            "title": "Mr.",
            "firstName": "Raghu",
            "lastName": "Singh"
        }
    }
   }

  ngOnInit() {
        this.summary = {
        "_id": "597db3e7f3c3d006b3570cd1",
        "userName": "raghusingh",
        "password": "c7233c0edb",
        "email": "abc@aa.com",
        "gender": "M",
        "diseases": ['Diabetes', 'Asthma'],
        "age": 21,
        "userType": "p",
        "nationality": "indian",
        "maritalStatus": true,
        "displayPicture": "12e23ce8dec0add0ec71cd6f41ee645f",
        "records": [
            {
                "prescriptions": [
                    {
                        "date": "20/07/2017",
                        "medicines": [
                            "cortizox 2x a day",
                            "clarinesc 3x a day",
                            "paracetamol 1x in evening"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "12/07/2017",
                        "medicines": [
                            "cortizox 2x a day",
                            "clarinesc 1x in evening",
                            "paracetamol 1x in evening"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "27/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record1"
            },
            {
                "prescriptions": [
                    {
                        "date": "24/07/2017",
                        "medicines": [
                            "cortizox 1x in evening",
                            "clarinesc 2x a day",
                            "paracetamol 1x in evening"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "22/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "28/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record2"
            },
            {
                "prescriptions": [
                    {
                        "date": "20/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres1"
                    },
                    {
                        "date": "12/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres2"
                    },
                    {
                        "date": "27/07/2017",
                        "medicines": [
                            "cortizox",
                            "clarinesc",
                            "paracetamol"
                        ],
                        "name": "pres3"
                    }
                ],
                "name": "record2"
            }
        ],
        "__v": 1,
        "appointments": [
            {
                "_id": "597dba87e31d3e7bc1840c0f",
                "doctorId": "597db4b1b78df571a3dd4f38",
                "patientId": "597db3e7f3c3d006b3570cd1",
                "date": "2017-07-31T00:00:00.000Z",
                "time": 1501396200000,
                "status": "active",
                "__v": 0,
                "symptoms": [
                    "cardio",
                    "fracture"
                ]
            }
        ],
        "characteristics": {
            "idMarks": [],
            "disabilities": []
        },
        "chronicDiseases": [],
        "allergies": [],
        "verified": false,
        "isAlive": true,
        "contacts": {
            "mobile": 774111111
        },
        "name": {
            "title": "Mr.",
            "firstName": "Raghu",
            "lastName": "Singh"
        }
    }
  }

  getPatientSummary(): void {
    this.get.getPatient().subscribe(data=>this.fetchedData(data))
  }
  fetchedData(data:any){
    console.log(data._body);
    this.summary=JSON.parse(data._body)[0];
    console.log(this.summary)
  }
}

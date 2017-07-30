import { Injectable } from '@angular/core';
import {Http,Headers} from'@angular/http';

@Injectable()
export class GetService {

  constructor(private http:Http) {

  }
  getSymptoms(){
    console.log('here');
    return this.http.get('http://192.168.1.103:3000/dataStore/medicalConditions');
  }
  getPatient(){
    return this.http.get('http://192.168.1.103:3000/patient/view/raghusingh');
  }




}

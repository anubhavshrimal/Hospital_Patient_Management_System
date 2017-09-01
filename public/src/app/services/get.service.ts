import { Injectable } from '@angular/core';
import {Http,Headers} from'@angular/http';

@Injectable()
export class GetService {

  constructor(private http:Http) {

  }
  getSymptoms(){
    console.log('here');
    return this.http.get('https://hpmanage.herokuapp.com/dataStore/medicalConditions');
  }
  getPatient(){
    return this.http.get('https://hpmanage.herokuapp.com/patient/view/raghusingh');
  }

  getDoctor(){
    return this.http.get('https://hpmanage.herokuapp.com/doctors')
  }

}

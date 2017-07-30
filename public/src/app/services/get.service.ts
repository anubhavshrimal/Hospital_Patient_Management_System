import { Injectable } from '@angular/core';
import {Http} from'@angular/http';
@Injectable()
export class GetService {

  constructor(private http:Http) { }
  login(pdetails:any){
    this.http.get('http://192.168.1.101:3000/patient');
  }


}

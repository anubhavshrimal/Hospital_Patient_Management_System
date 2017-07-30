import { Injectable } from '@angular/core';
import {Http} from'@angular/http';
@Injectable()
export class PostService {

  constructor(private http:Http) {
  }
  postdetails(details:any){
    console.log(details);
    return this.http.post('http://192.168.1.101:3000/patient',details);

  }
}

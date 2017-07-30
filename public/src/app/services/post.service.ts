import { Injectable } from '@angular/core';
import {Http,Headers} from'@angular/http';
@Injectable()
export class PostService {

  constructor(private http:Http) {
  }
  postdetails(details:any){
    console.log(details);

    let form1=new FormData();
    form1=this.createFormData(details)
    let header=new Headers();
    return this.http.post('http://192.168.1.101:3000/patient',form1,header);

  }
  login(pdetails:any){
    let form=new FormData();
    form=this.createFormData(pdetails)
    let header=new Headers()
    return this.http.post('http://192.168.1.103:3000/',form,{headers:header});
  }

  createFormData(object: Object, form?: FormData, namespace?: string): FormData {
    const formData = form || new FormData();
    for (let property in object) {
      if (!object.hasOwnProperty(property) || !object[property]) {
        continue;
      }
      const formKey = namespace ? `${namespace}[${property}]` : property;
      if (object[property] instanceof Date) {
        formData.append(formKey, object[property].toISOString());
      } else if (typeof object[property] === 'object' && !(object[property] instanceof File)) {
        this.createFormData(object[property], formData, formKey);
      } else {
        formData.append(formKey, object[property]);
      }
    }
    return formData;
  }
}

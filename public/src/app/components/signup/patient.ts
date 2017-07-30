class Address{
   plotno:string
   street:string
   district:string
   state:string
   POBox:number
  constructor(){
     this.plotno='';
     this.street='';
     this.district='';
     this.state='';
     this.POBox=null;
  }
}
class PDetails{
  title:string;
firstName:string;
middleName:string;
lastName:string;
constructor(){
  this.title='';
  this.firstName='';
  this.lastName='';
  this.middleName='';
}
}
class ContactDetals{
  home:Number
office:Number
mobile:Number
other:Number
  constructor(){
    this.home=null;
    this.mobile=null;
    this.office=null;
    this.other=null;
  }
}
export class FormData {
  insuranceNo:any;
  userType:string;
  verified:boolean;
  fatherName:string;
  contacts:ContactDetals;
  name:PDetails;
  address:Address;
  userName: string;
  password: string;
  email: string;
  gender: string
  age: number;
  maritalStatus: boolean;
  dob: Date;
  displayPicture: string;
  bloodGroup:string;

  constructor(){
    this.bloodGroup='';
    this.insuranceNo='';
    this.fatherName='';
    this.userType='patient';
    this.verified=false;
    this.contacts=new ContactDetals();
    this.address=new Address();
    this.name=new PDetails();
    this.age=null;
    this.email='';
    this.gender='';
    this.maritalStatus=false;
    this.userName='';
    this.password='';
    this.dob=null;
    this.displayPicture='';

  }
}

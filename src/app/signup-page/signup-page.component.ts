import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  username!:string;
  password!:string;
  email!:string;
  number!:string;



  signupsubmit(username:string,number:string,email:string,password:string,dob:string){
    //leaving this component as blank for now
    //data will be sent to database


  }





}

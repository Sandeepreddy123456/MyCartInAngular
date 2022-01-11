import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private  fb:FormBuilder,private _service:DataServiceService) { }
  
  login:any;
  ngOnInit(): void {

    this.login =this.fb.group({
      cname:['sandeep',[Validators.required]],
      // email:['abc@gmail.com',[Validators.required]],
      pass:['xyz',[Validators.required]]
      
      // mobile:[9848012345,[Validators.required]],
    });

    localStorage.setItem("customerId","19");
    console.log(localStorage.getItem("customerId"));
  }
 
  loginData:any;
  submit(){
this._service.login(this.login.value).subscribe(
  (data)=>{
  
    this.loginData=JSON.parse(data);
    console.log((this.loginData));
    console.log(this.loginData.cid);
    // localStorage.setItem('customerId',this.loginData.cid);


  }
)
    console.log(this.login.value)
  }
 
}

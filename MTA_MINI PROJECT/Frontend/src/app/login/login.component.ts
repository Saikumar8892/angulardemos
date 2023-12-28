import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

import { Router, Routes } from '@angular/router';
import { Route, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string="";
  constructor(public ls:LoginService,public router:Router){}

  ngOnInit():void{

  }

  signIn(){
    let login = this.loginRef.value;
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        if(result=="Admin successfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["adminHome"])
        }else if(result=="User sucessfully login"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["userHome"])
        }else{
          this.msg=result;
        }

      },
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")

    })
  }

}
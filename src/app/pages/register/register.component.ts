import { Component, OnInit } from '@angular/core';
import { RegisterService } from "./register.service";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  constructor(private register: RegisterService) {}

  username:string;
  email:string;
  pw1:string;
  pw2:string;

  registerUser() {
    if (this.validatePwd) {
      const form ={
        username:this.username,
        email:this.email,
        password: this.pw1
      }
      this.register.postData(form).subscribe((res) => {
        console.log(res);
      },(err)=>{
        console.log(err);
      });
    }
    
  }
  validatePwd(){
    if(this.pw1!== this.pw2){
      alert("Las contraseñas no coinciden");
      return false;
    }else{
      return true;
    }
  }
  ngOnInit() {}


}

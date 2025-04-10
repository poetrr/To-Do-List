import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  email:string|null=null;
  password:string|null=null;
  formSubmitted:boolean=false;
  loginError:string|null=null;
  
  changeName:string='';

  // changeValueFunction(){
  //   this.changeName="Hi buddy ";
  // }
  
  onSubmit(form:NgForm){
    this.formSubmitted=true;
    if(form.valid){
      console.log(this.email,this.password);
      this.loginError=null;
    }else{
      this.loginError="Invalid email or password";
    }
  }
  clearErrors() {
    this.formSubmitted = false;
  }
  

}

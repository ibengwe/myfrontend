import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityService } from '../../services/security.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  errosMsg:any

  loginForm!:FormGroup


  constructor(private route:Router,
    private security:SecurityService
    
    ){}


  ngOnInit(): void {
    this.formControl();

    
  }
  formControl() {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required]),

    })
  }

  onClick(){
    //
    const body=this.loginForm.value;
    this.security.login(body).subscribe((response:any)=>{
     console.log("success",response);

    localStorage.setItem('token',response.token);
    // Decode the JWT token to get user roles
    const tokenPayload = JSON.parse(atob(response.token.split('.')[1]));
    const userRole = tokenPayload.role;

    // Navigate to the appropriate dashboard based on user role
    if (userRole === 'ADMIN') {
      this.route.navigateByUrl('dashboard');
    } else if (userRole === 'USER') {
      this.route.navigateByUrl('section');
    }
    
    },(errorResp:HttpErrorResponse)=>{
      console.log("errors",errorResp)
      this.errosMsg=errorResp.status===403 ? "Invalid Username or Password  ": null;
      this.loginForm.reset()
    })
    

  }

}

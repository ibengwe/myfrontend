import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SecurityService } from '../../services/security.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm!:FormGroup

  constructor(private security:SecurityService){}
  ngOnInit(): void {
    this.formControl();
  }
  formControl() {
    this.signupForm=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      middleName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
    
    

  }


  onSave(){
    const values=this.signupForm.value;
    this.security.add(values).subscribe(()=>{
      console.log("The values are =>",values)
      this.signupForm.reset()
    })

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Data has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Gender {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-staff-register',
  templateUrl: './staff-register.component.html',
  styleUrl: './staff-register.component.css'
})
export class StaffRegisterComponent {
  selectedValue: string | undefined;


  gender: Gender[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'}
  ];


  isLinear=false ;
  constructor(private builder: FormBuilder) { }

  staffRegister = this.builder.group({

    basic: this.builder.group({
      firstName:this.builder.control('',Validators.required),
      middleName:this.builder.control('',Validators.required),
      lastName:this.builder.control('',Validators.required),
      email:this.builder.control('',Validators.required),
      mobile:this.builder.control('',Validators.required),
      checknumber:this.builder.control('',Validators.required),
      pfnumber:this.builder.control('',Validators.required),
      fnumber:this.builder.control('',Validators.required),
      gender:this.builder.control('',Validators.required),
      nida:this.builder.control('',Validators.required)

    }),
    recognition: this.builder.group({
      body:this.builder.control('',Validators.required),
      


    }),

    other: this.builder.group({
      age:this.builder.control('',Validators.required)
      // middleName:this.builder.control('',Validators.required),
      // lastName:this.builder.control('',Validators.required)
    })

  })

  get BasicForm(){
    return this.staffRegister.get('basic') as FormGroup;
  }

  get RecognitionForm(){
    return this.staffRegister.get('recognition') as FormGroup;
  }

  get OthersForm(){
    return this.staffRegister.get('other') as FormGroup;
  }

  staffHandler(){
    if(this.staffRegister.valid){
      console.log("value =>",this.staffRegister.value)
    }
  }

}

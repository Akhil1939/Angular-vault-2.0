import { Component } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]),
    password: new FormControl('', [Validators.required])  
  });

  get email(){
    return  this.loginForm.get('email');  
  }

  get password(){
    return this.loginForm.get('password');
  }

  login(){
    console.log(this.loginForm.value);
  }

}

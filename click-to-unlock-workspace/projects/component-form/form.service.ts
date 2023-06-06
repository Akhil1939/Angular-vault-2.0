import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    });
  }

  submitForm() {
    const formData = this.form.value;
    // Handle form submission logic here
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
  }
}
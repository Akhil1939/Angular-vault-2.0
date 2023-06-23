import { Component, OnInit } from '@angular/core';
import { FormService } from '../../form.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  
  constructor(public formService: FormService,private formBuilder:FormBuilder) {}

  form: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['akhil', [Validators.required, Validators.minLength(2)]],
      options: ['option1', Validators.required],
      multiOptions: [['option1', 'option2'], Validators.required],
      date: ['', Validators.required],
      
      // Add more form controls with their respective validators
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Form is valid, perform form submission or other actions
      console.log(this.form.value);
    } else {
      // Form is invalid, handle validation errors
      this.markFormControlsAsTouched();
    }
  }
  markFormControlsAsTouched() {
    Object.values(this.form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}

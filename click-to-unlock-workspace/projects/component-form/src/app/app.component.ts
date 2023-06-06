import { Component } from '@angular/core';
import { FormService } from '../../form.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public formService: FormService) {}

  control:FormControl;
  submitForm() {
    this.formService.submitForm();
  }
}

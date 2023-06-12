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

  name: string = "";
  onNameChange(name:string){
    this.name = name;
    console.log(name);

  }

  email: string = "";
  onEmailChange(email:string){
    this.email = email;
    console.log(email);
  }
  
}

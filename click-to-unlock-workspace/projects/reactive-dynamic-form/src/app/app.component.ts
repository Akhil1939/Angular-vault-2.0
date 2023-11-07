import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reactive-dynamic-form';

  constructor(public fb: FormBuilder) {}

  exampleForm: FormGroup = this.fb.group({});

  get hobbies() {
    return this.exampleForm.get('hobbyList') as FormArray;
  }

  addHobby() {
    const exampleForm = this.fb.group({
      title: ['', Validators.required],
      playLevel: ['', Validators.required],
    });

    this.hobbies.push(exampleForm);
  }

  deleteHobby(i: number) {
    this.hobbies.removeAt(i);
  }

  ngOnInit() {
    this.exampleForm= this.fb.group({
      name: [''],
      surname: [''],
      hobbyList: this.fb.array([this.hobbies]),
    });
    this.exampleForm.valueChanges.subscribe((res) => console.log(res));
  }

}

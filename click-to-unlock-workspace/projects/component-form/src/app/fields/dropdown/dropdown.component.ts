import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Option {
  value: string;
  viewValue: string;
  selected: boolean;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent {
  @Input() parentForm: any;
  @Input() controlName: string = '';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;
  @Input() options: Option[] = [
    {value: 'option1', viewValue: 'Option 1', selected: false},
    {value: 'option2', viewValue: 'Option 2', selected: false},
    {value: 'option3', viewValue: 'Option 3', selected: false}
    
  ];
 
  control:FormControl = new FormControl('');


  ngOnInit(): void {
    this.control = this.parentForm.get(this.controlName) ;
  }
}
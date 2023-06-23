import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() parentForm: any;
  @Input() controlName: string = '';
  @Input() title: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
 


  control:FormControl = new FormControl('');


  ngOnInit(): void {
    this.control = this.parentForm.get(this.controlName) ;
  }
}

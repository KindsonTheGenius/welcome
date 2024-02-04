import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    department: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      zip: ['']
    }),
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  update() {
    console.log(this.employeeForm.value);
  }
}

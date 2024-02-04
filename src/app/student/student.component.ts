import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  firsname: string;
  imgUrl: any;
  isDisabled: any;
  myDate: Date;
   title: string;
   todaysdate: Date;
   jsondata: { address: { a1: string; a2: string }; name: string; age: string };
   months: string[];


  constructor() { }

  ngOnInit(): void {
    this.title = 'my-first-app';
    this.todaysdate = new Date();
    this.jsondata = {name: 'Saffron', age: '30', address: {a1: 'Lagos', a2: 'Nigeria'}};
    this.months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  }

}

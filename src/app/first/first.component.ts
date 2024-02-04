import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})

export class FirstComponent implements OnInit {
  name: string;
  firstname: any;
  lastname: any;
  email: any;
  address: any;
  person: Person;

  constructor() { }

  ngOnInit(): void {

    this.person = new Person(
      'Kindson',
      'Munonye',
      'thegenius@gmail.com',
      'Budapest, Hungary'
    );

  }

  send() {
    console.log();
  }
}

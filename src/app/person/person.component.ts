import { Component, OnInit } from '@angular/core';
import {Person} from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person: Person;
  constructor() { }

  ngOnInit(): void {
    this.person = new Person(
      'Kindson',
      'Munonye',
      'genius@gmail.com',
      'Budapest Hungary'
    );
  }

  update() {

  }
}

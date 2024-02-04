import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   books: string[];
   papa: string;

  constructor() { }

  ngOnInit(): void {

    this.books = ['Harry Porter', 'Oliver Twist', 'Animal Farm', 'Othello'];
    this.papa = 'Daddy';
  }

}

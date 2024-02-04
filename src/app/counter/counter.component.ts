import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  styles: ['h2 {color: black}']
})
export class CounterComponent implements OnInit{
   respondents: string[];
   yes: number;
   no: number;

  ngOnInit(): void {
    this.respondents = ['Ndubuisi', 'Osondu', 'Adaku', 'Ijeoma'];
    this.yes = 0;
    this.no =  0;
  }

  onVoted(response: boolean) {
    response ? this.yes++ : this.no++;
  }
}

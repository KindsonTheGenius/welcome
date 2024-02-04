import {AfterContentInit, Component, DoCheck, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements  OnChanges, OnInit, DoCheck, AfterContentInit {
  constructor(){
    alert('1. OnChanges() is called');
  }
  title = 'Lifecycle Hooks Demo';

  ngAfterContentInit(): void {
    alert('4. AfterContentInit() is called');
  }
  ngDoCheck(): void {
    alert('3. ngOnDoCheck() is called');
  }
  ngOnInit(): void {
    alert('2. ngOnInit() is called');
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
  }
}

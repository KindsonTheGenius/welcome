import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() voter: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;

  vote(userResponse: boolean) {
    this.voted.emit(userResponse);
    this.didVote = true;
  }
}

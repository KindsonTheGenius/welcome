import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ExponentPipeComponent } from './exponent-pipe/exponent-pipe.component';
import { ExponentPipe } from './exponent.pipe';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './person/person.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { VoterComponent } from './voter/voter.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ExponentPipeComponent,
    ExponentPipe,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    EmployeeComponent,
    EmployeeComponent,
    PersonComponent,
    ChildComponent,
    ParentComponent,
    VoterComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {EmployeeComponent} from './employee/employee.component';
import {PersonComponent} from './person/person.component';
import {ParentComponent} from './parent/parent.component';
import {CounterComponent} from './counter/counter.component';


const routes: Routes = [
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'person', component: PersonComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'parent', component: ParentComponent},
  { path: 'voting', component: CounterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

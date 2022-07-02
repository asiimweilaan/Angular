import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <!-- <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2> -->
    <h2>{{name | slice:3:5}}</h2>
    <h2>{{person | json}}</h2>

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'GBP'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>

  `,
  styles: [`
  .text-special{
    color:red;
  }
  .text-danger{
    color:green;
  }
  
  `]
})
export class CoursesComponent implements OnInit {
  public name = "Codevolution";
  public message = "Welcome to Codevolution";
  public person ={
    "firstName":"John",
    "lastName":"Doe"
  }
  public date = new Date();

  constructor() {
    

  }

  ngOnInit(): void {
  }

  logMessage(value:string){
    console.log(value);
  }

  onClick(event:Event){
    console.log(event);


  }

}

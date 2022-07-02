import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
   <!-- <h2 *ngFor="let e of employees">
   </h2>  -->

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
  public employees = [];

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

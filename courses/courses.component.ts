import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <h2>
    First trial below is:
  </h2>
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Click</button>
  
  {{greeting}}
  {{trial}}
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
  public trial = "";
  public myId = "testId";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = 'yellow';
  public greeting ="";

  constructor() {
    

  }

  ngOnInit(): void {
  }

  getStart(){
    this.trial = "Impressive";

  }
  logMessage(value:string){
    console.log(value);
  }
  public messageClasses = {
    "text-special":this.hasError,
    "text-danger":!this.hasError
  }

  onClick(event:Event){
    console.log(event);
    this.greeting = 'Welcome to Coding of the evolution';

  }

}

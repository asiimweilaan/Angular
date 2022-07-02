import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
    <h2>{{"Hello "+parentData}}</h2>
    <button (click)="fireEvent()">Send Event</button>
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
  
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  constructor() {
    

  }
  fireEvent(){
    this.childEvent.emit('Hey Codevolution');
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
